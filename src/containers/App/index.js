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
import MenuDesktop from './components/MenuDesktop'
import MenuMobile from './components/MenuMobile'

import Home from '../Home'
import About from '../About'
import Catalog from '../Catalog'
import Detail from '../Detail'
import NotFound from '../NotFound'

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    resize: PropTypes.func.isRequired,
    getAllItems: PropTypes.func.isRequired,
    dipatchPush: PropTypes.func.isRequired,
  }

  componentDidMount() {
    addEvent(window, 'resize', this.handleResize)
    this.props.getAllItems()
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.handleResize)
  }

  handleResize = () => {
    this.props.resize(window.innerWidth, window.innerHeight)
  }

  render() {
    const { location, dipatchPush } = this.props
    return (
      <div id="App">
        <MediaQuery minWidth={560}>
          <MenuDesktop
            routes={routes}
            current={location.pathname}
            push={dipatchPush}
          />
        </MediaQuery>
        <MediaQuery maxWidth={560}>
          <MenuMobile
            routes={routes}
            current={location.pathname}
            push={dipatchPush}
          />
        </MediaQuery>
        <TransitionGroup className="AppRouter">
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
      </div>
    )
  }
}


const mapStateToProps = state => ({
  index: state.app.index,
  location: state.routing.location,
})

export default connect(mapStateToProps, { resize, getAllItems, dipatchPush: push })(App)
