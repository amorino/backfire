import React from 'react'
import Modernizr from 'modernizr'
import preloader from 'preloader'
import { TweenMax, Quint, Linear } from 'gsap'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import 'sanitize.css/sanitize.css'

import configureStore from './store'
import Framework from './containers/Framework'
import catalog from './assets/json/catalog.json'

console.info(Modernizr)

const GOOGLE_ANALYTICS_CODE = process.env.GOOGLE_ANALYTICS_CODE
const LOAD_ASSETS = process.env.LOAD_ASSETS

const debug = !(process.env.NODE_ENV === 'production')
ReactGA.initialize(GOOGLE_ANALYTICS_CODE, { debug, titleCase: false })

const history = createHistory()
history.listen(location => ReactGA.pageview(location.pathname))
const store = configureStore(history)

const root = document.getElementById('Root')

const compose = Component => render(
  <AppContainer>
    <Provider store={store}>
      <Component history={history} />
    </Provider>
  </AppContainer>, root,
)

const ready = () => {
  TweenMax.to('#RootLoader', 1.3, {
    autoAlpha: 0,
    delay: LOAD_ASSETS ? 1.75 : 0,
    ease: Quint.easeOut,
    onComplete: () => {
      const loader = document.getElementById('RootLoader')
      loader.parentNode.removeChild(loader)
      compose(Framework)
    },
  })
}

const assetsLoader = new Promise((resolve) => {
  const preload = preloader({ xhrImages: true, loadFullAudio: true, loadFullVideo: true })
  preload.on('progress', (progress) => {
    const percentage = `${Math.round(progress * 100)}%`
    console.log('>> loading', percentage)
    document.getElementById('RootLoader_Container_Text').innerHTML = percentage
    TweenMax.to('#RootLoader_Container_Line', 0.4, {
      ease: Linear.easeNone,
      overwrite: 'all',
      width: percentage,
    })
  })
  preload.on('complete', resolve)
  preload.add(catalog)
  preload.load()
})

LOAD_ASSETS ? Promise.all([assetsLoader]).then(ready) : ready()

if (module.hot) {
  module.hot.accept('./containers/Framework', () => {
    const Next = require('./containers/Framework').default // eslint-disable-line global-require
    compose(Next)
  })
}
