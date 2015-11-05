import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../utils/configureStore';
import { ReduxRouter } from 'redux-router';
import { getAllProducts } from '../actions/products'

const store = configureStore();
store.dispatch(getAllProducts())

export default class Root extends Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    );
  }
}
