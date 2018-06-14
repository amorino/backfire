// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'
import { push } from 'react-router-redux'
import MediaQuery from 'react-responsive'
import { TweenMax } from 'gsap'
import { resize } from './actions'
import { getAllItems } from '../Catalog/actions'
import routes from '../../routes'
import { sizes } from '../../styles'
import { AppRoot, AppWrapper } from './styled'
import MenuDesktop from './components/MenuDesktop'
import MenuMobile from './components/MenuMobile'
import Home from '../Home'
import About from '../About'
import Catalog from '../Catalog'
import Detail from '../Detail'
import NotFound from '../NotFound'
import type { Size, Route as RouteType } from './types'

type Props = {
    location: Object,
    dispatchResize: (size: Size) => void,
    dispatchGetAllItems: Function,
    dipatchPush: (route: string) => void,
}

class App extends React.PureComponent<Props> {
  componentDidMount() {
    const { dispatchGetAllItems } = this.props
    window.addEventListener('resize', this.handleResize)
    dispatchGetAllItems()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  enterNode: ?HTMLElement
  isAppearing: Boolean = false
  duration: Number = 1

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
            appear
            mountOnEnter
            unmountOnExit
            addEndListener={(node, done) => {
              TweenMax.killTweensOf(node)
              const { duration, isAppearing, enterNode } = this
              if (node === enterNode) {
                TweenMax.set(node, {
                  width: '100%',
                })
                TweenMax.fromTo(node, duration, {
                  autoAlpha: 0,
                  // position: 'absolute',
                }, {
                  autoAlpha: 1,
                  // x: 0,
                  delay: isAppearing ? 0 : duration,
                  onComplete: () => {
                    TweenMax.set(node, { clearProps: 'position, width, height' })
                    done()
                  },
                })
              } else {
                TweenMax.to(node, duration, {
                  opacity: 0,
                  // position: 'absolute',
                  onComplete: done,
                })
              }
            }}
            onEnter={(node: HTMLElement, isAppearing: Boolean) => {
              this.enterNode = node
              this.isAppearing = isAppearing
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
  dispatchResize: (size: Size) => dispatch(resize(size)),
  dispatchGetAllItems: () => dispatch(getAllItems()),
  dipatchPush: (route: RouteType) => dispatch(push(route)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
