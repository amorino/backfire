import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import sagas from 'sagas'
import createReducer from 'reducers'
// import sagaMonitor from 'utils/sagaMonitor'

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

export default function configureStore(initialState = {}) {
  // const enhancers = [
    // applyMiddleware(sagaMiddleware),
  // ]

  const store = createStore(createReducer(), initialState)

  // store.runSaga = sagaMiddleware.run(sagas)
  return store
}
