import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import sagas from 'sagas'
import createReducer from 'reducers'
import sagaMonitor from 'utils/sagaMonitor'

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const devtools = !(process.env.NODE_ENV === 'production') ? window.devToolsExtension || (() => f => f) : (() => f => f)

export default function configureStore(history, initialState = {}) {
  const enhancers = [
    applyMiddleware(sagaMiddleware),
    devtools(),
  ]

  const store = createStore(createReducer(), initialState, compose(...enhancers))

  store.runSaga = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }
  return store
}
