import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'
import { push } from 'react-router-redux'
import MediaQuery from 'react-responsive'
import { TweenMax } from 'gsap'
import { addEvent, removeEvent } from '../../utils/events'
import { resize } from './actions'
import { getAllItems } from '../Catalog/actions'
import routes from '../../routes'
import { sizes } from '../../styles'
import { AppRoot, AppWrapper } from './components'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import Home from '../Home'
import About from '../About'
import Catalog from '../Catalog'
import Detail from '../Detail'
import NotFound from '../NotFound'

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    dispatchResize: PropTypes.func.isRequired,
    dispatchGetAllItems: PropTypes.func.isRequired,
    dipatchPush: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatchGetAllItems } = this.props
    addEvent(window, 'resize', this.handleResize)
    dispatchGetAllItems()
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.handleResize)
  }

  handleResize = () => {
    const { dispatchResize } = this.props
    dispatchResize({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { location, dipatchPush } = this.props
    return (
      <AppRoot fontSize={[0, 1, 2]}>
        <MediaQuery minWidth={sizes.mobile}>
          <MenuDesktop
            routes={routes}
            current={location.pathname}
            push={dipatchPush}
          />
        </MediaQuery>
        <MediaQuery maxWidth={sizes.mobile}>
          <MenuMobile
            routes={routes}
            current={location.pathname}
            push={dipatchPush}
          />
        </MediaQuery>
        <TransitionGroup component={AppWrapper}>
          <Transition
            key={location.pathname}
            mountOnEnter
            unmountOnExit
            addEndListener={(node, done) => {
              TweenMax.killTweensOf(node)
              if (node === this.enterNode) {
                TweenMax.fromTo(node, 0.6, {
                  x: 100,
                  autoAlpha: 0,
                  position: 'absolute',
                }, {
                  autoAlpha: 1,
                  x: 0,
                  onComplete: () => {
                    TweenMax.set(node, { clearProps: 'position' })
                    done()
                  },
                })
              } else {
                TweenMax.to(node, 0.6, {
                  opacity: 0,
                  position: 'absolute',
                  x: -100,
                  onComplete: done,
                })
              }
            }}
            onEnter={(node) => {
              this.enterNode = node
            }}
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/catalog/:id" component={Detail} />
              <Route exact path="/catalog" component={Catalog} />
              <Route component={NotFound} />
            </Switch>
          </Transition>
        </TransitionGroup>
      </AppRoot>
    )
  }
}


const mapStateToProps = state => ({
  index: state.app.index,
  location: state.routing.location,
})

const mapDispatchToProps = dispatch => ({
  dispatchResize: size => dispatch(resize(size)),
  dispatchGetAllItems: () => dispatch(getAllItems()),
  dipatchPush: route => dispatch(push(route)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
