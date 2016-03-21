/**
 * Create the store with asynchronously loaded reducers
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import sagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createReducer from '../reducers';
import sagaMonitor from '../utils/sagaMonitor';

export default function configureStore(initialState, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Imports all the asynchronous flows ("sagas") from the
  //    sagas folder and triggers them
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware(rootSaga), sagaMonitor),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = createStoreWithMiddleware(createReducer(), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
