import app from 'styles/views/App'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Menu from 'components/App/Menu'
import { resize } from 'actions/app'
import { RouteTransition } from 'react-router-transition'
import { spring } from 'react-motion'
import { quick } from 'animations/motion'
import { addEvent, removeEvent } from 'utils/events'

const motion = {
  atEnter: {
    opacity: 0,
    translate: -200,
  },
  atLeave: {
    opacity: spring(0, quick),
    translate: spring(200, quick),
  },
  atActive: {
    opacity: spring(1, quick),
    translate: spring(0, quick),
  },
}

class App extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    resize: PropTypes.func.isRequired,
  }

  componentDidMount() {
    addEvent(window, 'resize', this.handleResize)
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.handleResize)
  }

  handleResize = () => {
    this.props.resize(window.innerWidth, window.innerHeight)
  }

  render() {
    const { location, children } = this.props
    // const direction = { enter: -100, leave: 100 }
    return (
      <div id="app">
        <Menu current={location.pathname} />
        <RouteTransition
          className={app.router}
          runOnMount={false}
          component={false}
          pathname={location.pathname}
          {...motion}
          mapStyles={style => ({
            opacity: `${style.opacity}`,
            WebkitTransform: `translate3d(0, ${style.translate}px, 0)`,
            MsTranform: `translate3d(0, ${style.translate}px, 0)`,
            transform: `translate3d(0, ${style.translate}px, 0)`,
          })}
        >
          <div className={app.wrapper}>
            {children}
          </div>
        </RouteTransition>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  index: state.app.index,
})

export default connect(mapStateToProps, { resize })(App)
