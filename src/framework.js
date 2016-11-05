import React, { Component } from 'react'
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll'
import ReactGA from 'react-ga'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from 'store'
import routes from 'routes'
import App from 'views/App'

ReactGA.initialize('UA-000000-01', {
  debug: true,
  titleCase: false,
})

function logPageView() {
  ReactGA.pageview(window.location.pathname)
}

const router = {
  component: App,
  childRoutes: routes(),
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          history={history}
          onUpdate={logPageView}
          routes={router}
          render={applyRouterMiddleware(useScroll())}
        />
      </Provider>
    )
  }
}
