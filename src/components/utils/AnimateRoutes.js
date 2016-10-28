import React, { Component, PropTypes } from 'react'
import gsap from 'react-gsap-enhancer'
import { routeAppear, routeLeave } from 'animations/routes'

class AnimateRoutes extends Component {
  componentWillEnter(callback) {
    const { direction } = this.props
    this.addAnimation(routeAppear, { callback, direction })
  }

  componentWillLeave(callback) {
    const { direction } = this.props
    this.addAnimation(routeLeave, { callback, direction })
  }

  render() {
    const { children, style } = this.props
    return (
      <div className={style} >
        {children}
      </div>
    )
  }
}

AnimateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.string.isRequired,
  direction: PropTypes.object.isRequired,
}

export default gsap()(AnimateRoutes)
