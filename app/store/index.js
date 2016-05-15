import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createReducer from '../reducers';
import sagaMonitor from '../utils/sagaMonitor';

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = createStoreWithMiddleware(createReducer(), initialState);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
