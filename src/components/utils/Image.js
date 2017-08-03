import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    speed: PropTypes.number,
    style: PropTypes.object,
    title: PropTypes.string,
    ease: PropTypes.string,
  }

  static defaultProps = {
    speed: 1.35,
    style: {},
    title: 'Image',
    ease: 'ease-out',
  }

  state = {
    opacity: 0,
    loaded: false,
  }

  fadeIn = () => {
    this.setState({ opacity: 1, loaded: true })
  }

  render() {
    const { src, speed, title, ease } = this.props
    const { opacity, loaded } = this.state
    return (
      <img
        alt={loaded ? title : 'Loading'}
        style={{
          transition: `opacity ${speed}s ${ease}`,
          opacity,
        }}
        src={src}
        onLoad={this.fadeIn}
      />)
  }
}

export default Image
