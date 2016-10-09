import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import createReducer from 'reducers';
import sagaMonitor from 'utils/sagaMonitor';

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
  const store = createStoreWithMiddleware(createReducer(), initialState);

  store.runSaga = sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }
  return store;
}
