import {createStore, applyMiddleware} from 'redux';
import {syncHistory} from 'redux-simple-router';
import {hashHistory, useRouterHistory} from 'react-router';
import thunk from 'redux-thunk'
import reducer from '../reducers';

// const history = createHashHistory({ queryKey: false });
const reduxRouterMiddleware = syncHistory(useRouterHistory(createHashHistory)({queryKey: false}));
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
