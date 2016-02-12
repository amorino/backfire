import {createStore, applyMiddleware} from 'redux';
import {syncHistory} from 'react-router-redux';
import {hashHistory, useRouterHistory} from 'react-router';
// import thunk from 'redux-thunk'
import reducer from '../reducers';

const history = createHashHistory({ queryKey: false });
const reduxRouterMiddleware = syncHistory(useRouterHistory(createHashHistory)({queryKey: false}));
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
