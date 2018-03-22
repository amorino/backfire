// @flow
import type { History } from 'history'
import type { Store } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import createReducer from './reducers'

const devtools = !(process.env.NODE_ENV === 'production') ? window.devToolsExtension || (() => f => f) : (() => f => f)

type State = {}

export default function configureStore(history: History, initialState: State = {}) : Store {
  const sagaMiddleware = createSagaMiddleware()

  const enhancers = [
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    devtools(),
  ]

  const store = createStore(createReducer(), initialState, compose(...enhancers))

  store.runSaga = sagaMiddleware.run(sagas)
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers : (any) => void = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }
  return store
}
