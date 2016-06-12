import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import sagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createReducer from '../reducers';
import sagaMonitor from '../utils/sagaMonitor';

export default function configureStore(initialState, history) {
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
