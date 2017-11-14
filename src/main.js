import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import 'sanitize.css/sanitize.css'
import './styles/globalStyles'

import configureStore from './store'
import Framework from './containers/Framework'

const GOOGLE_ANALYTICS_CODE = process.env.GOOGLE_ANALYTICS_CODE

const debug = !(process.env.NODE_ENV === 'production')
ReactGA.initialize(GOOGLE_ANALYTICS_CODE, { debug, titleCase: false })

const history = createHistory()
history.listen(location => ReactGA.pageview(location.pathname))
const store = configureStore(history)

const root = document.getElementById('root')

const compose = App => render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>, root,
)

compose(Framework)

if (module.hot) {
  module.hot.accept('./containers/Framework', () => {
    const Next = require('./containers/Framework').default // eslint-disable-line global-require
    compose(Next)
  })
}
