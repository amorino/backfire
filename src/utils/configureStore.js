import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import thunk from 'redux-thunk';
import api from '../middlewares/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from '../middlewares/PromiseMiddleware';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
// import rootReducer from '../reducers';
//
// const logger = createLogger({
//   level: 'info',
//   collapsed: false
// });
//
// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   promiseMiddleware,
//   logger
// )(createStore);
//
// export default function configureStore(initialState) {
//   const store = createStoreWithMiddleware(rootReducer, initialState);
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// }
