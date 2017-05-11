import React, { Component, PropTypes } from 'react'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    speed: PropTypes.number,
    style: PropTypes.object,
    title: PropTypes.string,
  }

  static defaultProps = {
    speed: 1,
    style: {},
    title: 'Image',
  }

  state = {
    opacity: 0,
    loaded: false,
  }

  fadeIn = () => {
    this.setState({ opacity: 1, loaded: true })
  }

  render() {
    const { src, speed, title } = this.props
    const { opacity, loaded } = this.state
    return (
      <img
        alt={loaded ? title : 'Loading'}
        style={{
          transition: `opacity ${speed}s`,
          opacity,
        }}
        src={src}
        onLoad={this.fadeIn}
      />)
  }
}

export default Image
