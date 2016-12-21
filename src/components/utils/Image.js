import React, { Component, PropTypes } from 'react'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    speed: PropTypes.number,
    style: PropTypes.string,
  }

  state = {
    opacity: 0,
  }

  fadeIn = () => {
    this.setState({ opacity: 1 })
  }

  render() {
    const { src, speed } = this.props
    const style = this.props.style || {}
    style.transition = `opacity ${speed || 1}s`
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
