import React, { Component, PropTypes } from 'react'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    speed: PropTypes.number,
    style: PropTypes.string,
  }

  static defaultProps = {
    speed: 1,
    style: {},
  }

  state = {
    opacity: 0,
  }

  fadeIn = () => {
    this.setState({ opacity: 1 })
  }

  render() {
    const { src, speed, style } = this.props
    style.transition = `opacity ${speed}s`
    style.opacity = this.state.opacity
    return (
      <img
        alt={'loaded'}
        {...this.props}
        style={style}
        src={src}
        onLoad={this.fadeIn}
      />)
  }
}

export default Image
