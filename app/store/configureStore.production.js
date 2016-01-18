import {createStore, applyMiddleware, compose} from 'redux'
import {syncHistory} from 'redux-simple-router';
import {hashHistory, useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'
import thunk from 'redux-thunk'
import api from '../middleware/api';
import reducer from '../reducers';

// const history = createHashHistory({ queryKey: false });
const reduxRouterMiddleware = syncHistory(useRouterHistory(createHashHistory)({queryKey: false}));

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(reduxRouterMiddleware)
)(createStore);

export default function configureStore(initialState) {
  store = createStoreWithMiddleware(reducer, initialState);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
