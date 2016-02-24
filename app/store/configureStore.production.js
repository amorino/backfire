import {createStore, applyMiddleware} from 'redux';
import {syncHistory} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {browserHistory} from 'react-router';
import reducer from '../reducers';
import rootSaga from '../sagas';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, createSagaMiddleware(rootSaga))(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  reduxRouterMiddleware.listenForReplays(store, (state) => state.get('route').location);
  return store;
}
