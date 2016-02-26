import {createStore, applyMiddleware} from 'redux';
import {syncHistory} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {browserHistory} from 'react-router';
// import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import rootSaga from '../sagas';
import {Iterable} from 'immutable';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  return state;
};

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, createSagaMiddleware(rootSaga), createLogger({collapsed: true, stateTransformer}))(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  reduxRouterMiddleware.listenForReplays(store, (state) => state.get('route').location);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
