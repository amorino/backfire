// @flow
import * as React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TweenMax, Power3 } from 'gsap'
import { Transition } from 'react-transition-group'

import Loader from './components/Loader'
import ScrollTop from './components/ScrollTop'
import Root from './styled'
import App from '../App'
import { provider } from '../../styles'
import { assetsLoader } from './utils/loaders'

type State = {
  isLoaded: boolean,
  loaderLeft: boolean,
  percentage: number,
}

type Props = {
  history: Object,
}

export default class Framework extends React.Component<Props, State> {
  state = {
    isLoaded: false,
    loaderLeft: false,
    percentage: 0,
  }

  componentDidMount() {
    const { setPercentage } = this
    Promise.all([assetsLoader(setPercentage)])
      .then(() => this.setState({ isLoaded: true }))
  }

  setPercentage = (percentage: number) => this.setState({ percentage })

  loaderLeave = (done: Function) => {
    done()
    this.setState({ loaderLeft: true })
  }

  render() {
    const { loaderLeave } = this
    const { history } = this.props
    const { isLoaded, loaderLeft, percentage } = this.state
    return (
      <Root>
        <Transition
          in={!isLoaded}
          unmountOnExit
          addEndListener={(node, done) => {
            TweenMax.killTweensOf(node)
            TweenMax.to(node, 1.5, {
              autoAlpha: 0,
              onComplete: () => loaderLeave(done),
              ease: Power3.easeOut,
            })
          }}
        >
          <Loader percentage={percentage} />
        </Transition>
        {
          loaderLeft &&
          <ConnectedRouter history={history}>
            <ScrollTop>
              <ThemeProvider theme={provider}>
                <Route component={App} />
              </ThemeProvider>
            </ScrollTop>
          </ConnectedRouter>
        }
      </Root>
    )
  }
}
