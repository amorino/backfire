import {createStore, applyMiddleware, compose} from 'redux';
import { syncHistory } from 'redux-simple-router';
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import api from '../middleware/api';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(createLogger({collapsed: true}))
)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    reduxRouterMiddleware.listenForReplays(store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
