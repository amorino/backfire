import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from 'store';
import routes from 'routes';
import App from 'containers/App';

const rootRoute = {
  component: App,
  childRoutes: routes()
};

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={rootRoute} render={applyRouterMiddleware(useScroll())} />
      </Provider>
    );
  }
}
