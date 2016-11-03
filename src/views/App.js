import app from 'styles/views/App'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Menu from 'components/App/Menu'
import { resize } from 'actions/app'
import { RouteTransition } from 'react-router-transition'

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const { dispatch } = this.props
    dispatch(resize(window.innerWidth, window.innerHeight))
  }

  render() {
    const { location, children } = this.props
    const direction = { enter: -100, leave: 100 }
    return (
      <div id="app">
        <Menu />
        <RouteTransition
          className={app.router}
          runOnMount={false}
          component={false}
          pathname={location.pathname}
          atEnter={{ opacity: 0, translate: direction.enter }}
          atLeave={{ opacity: 0, translate: direction.leave }}
          atActive={{ opacity: 1, translate: 0 }}
          mapStyles={style => ({
            opacity: `${style.opacity}`,
            WebkitTransform: `translate3d(0, ${style.translate}%, 0)`,
            MsTranform: `translate3d(0, ${style.translate}%, 0)`,
            transform: `translate3d(0, ${style.translate}%, 0)`,
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

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { index: state.app.index }
}

export default connect(mapStateToProps)(App)
