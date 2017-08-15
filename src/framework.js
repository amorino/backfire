import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { environment } from 'config'
import App from 'views/App'
import ScrollToTop from 'components/Utils/ScrollToTop'

const debug = !(process.env.NODE_ENV === 'production')

ReactGA.initialize(environment.properties.ga, { debug, titleCase: false })

const history = createHistory()
const store = configureStore(history)

history.listen(location => ReactGA.pageview(location.pathname))

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <Route component={App} />
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    )
  }
}
