import React, {Component} from 'react';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import routes from '../routes';
import {fromJS} from 'immutable';
import App from 'App';

const rootRoute = {
  component: App,
  childRoutes: routes
};

const store = configureStore(fromJS({}));
const history = browserHistory;

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={rootRoute} />
      </Provider>
    );
  }
}
