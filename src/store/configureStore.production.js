import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import {createHashHistory} from 'history'
import routes from '../routes';
import thunk from 'redux-thunk'
import api from '../middleware/api';
import reducer from '../reducers';

const history = createHashHistory({ queryKey: false });

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, history })
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState)
}
