/* eslint-env browser */
/* global process */
import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import routes from './routes';
// import { ReduxRouter } from 'redux-react-router';

const store = configureStore();

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={this.props.history} children={routes}/>
      </Provider>
    );
  }
}
