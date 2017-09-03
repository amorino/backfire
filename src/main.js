import Modernizr from 'modernizr'
import preloader from 'preloader'
import { TweenMax } from 'gsap'  // eslint-disable-line
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Framework from 'views/Framework'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import configureStore from 'store'
import createHistory from 'history/createBrowserHistory'
import { config, environment } from 'config'

import 'sanitize.css/sanitize.css'
import 'styles/main'

console.info(Modernizr)
window.Modernizr = Modernizr
const debug = !(process.env.NODE_ENV === 'production')
ReactGA.initialize(environment.properties.ga, { debug, titleCase: false })

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

const ready = (assets = false) => {
  if (assets) console.info('Assets Loaded')
  TweenMax.to('#root__loader', 1.3, {
    autoAlpha: 0,
    delay: 1.75,
    ease: Quint.easeOut,
    onComplete: () => compose(Framework),
  })
}

if (config.assets) {
  console.info('Load Assets')
  const preload = preloader({ xhrImages: true, loadFullAudio: true, loadFullVideo: true })
  preload.on('progress', progress => console.log(progress))
  preload.on('complete', () => ready(true))
  preload.load()
} else {
  console.warn('Do Not Load Assets')
  ready()
}

if (module.hot) {
  module.hot.accept('./views/Framework', () => {
    const Next = require('./views/Framework').default // eslint-disable-line global-require
    compose(Next)
  })
}
