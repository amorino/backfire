import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { environment } from 'config'

import ScrollTop from 'components/App/ScrollTop'

import App from 'views/App'
import Home from 'views/Home'
import About from 'views/About'
import Catalog from 'views/Catalog'
import CatalogItem from 'views/CatalogItem'
import NotFound from 'views/NotFound'

const debug = !(process.env.NODE_ENV === 'production')

ReactGA.initialize(environment.properties.ga, { debug, titleCase: false })

const history = createHistory()
const store = configureStore(history)
// const history = syncHistoryWithStore(history, store)
history.listen(location => ReactGA.pageview(location.pathname))

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollTop>
            <App>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/catalog/:id" component={CatalogItem} />
                <Route path="/catalog" component={Catalog} />
                <Route component={NotFound} />
              </Switch>
            </App>
          </ScrollTop>
        </ConnectedRouter>
      </Provider>
    )
  }
}
