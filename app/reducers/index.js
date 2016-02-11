import {catalog, filter} from './catalog';
import {routeReducer} from 'react-router-redux';
import {combineReducers} from 'redux-immutable';

function content(state = null, action) {
  return action.content
    ? action.content
    : state;
}

function detail(state = null, action) {
  return action.detail
    ? action.detail
    : state;
}

export default combineReducers({route: routeReducer, catalog, filter, content, detail});
