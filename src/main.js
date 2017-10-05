import Modernizr from 'modernizr'
import preloader from 'preloader'
import 'sanitize.css/sanitize.css'
import { TweenMax } from 'gsap'  // eslint-disable-line
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import configureStore from './store'
import Framework from './containers/Framework'
import './styles/main'

console.info(Modernizr)

const GOOGLE_ANALYTICS_CODE = process.env.GOOGLE_ANALYTICS_CODE
const LOAD_ASSETS = process.env.LOAD_ASSETS

const debug = !(process.env.NODE_ENV === 'production')
ReactGA.initialize(GOOGLE_ANALYTICS_CODE, { debug, titleCase: false })

const history = createHistory()
history.listen(location => ReactGA.pageview(location.pathname))
const store = configureStore(history)

const root = document.getElementById('root')

const compose = Component => render(
  <AppContainer>
    <Provider store={store}>
      <Component history={history} />
    </Provider>
  </AppContainer>, root,
)

const ready = () => {
  TweenMax.to('#root__loader', 1.3, {
    autoAlpha: 0,
    delay: LOAD_ASSETS ? 1.75 : 0,
    ease: Quint.easeOut,
    onComplete: () => compose(Framework),
  })
}

const assetsLoader = new Promise((resolve) => {
  const preload = preloader({ xhrImages: true, loadFullAudio: true, loadFullVideo: true })
  preload.on('progress', progress => console.log('assets', progress))
  preload.on('complete', resolve)
  preload.load()
})

LOAD_ASSETS ? Promise.all([assetsLoader]).then(ready) : ready()

if (module.hot) {
  module.hot.accept('./containers/Framework', () => {
    const Next = require('./containers/Framework').default // eslint-disable-line global-require
    compose(Next)
  })
}
