import {catalog, filter} from './catalog';
import merge from 'lodash/object/merge';
import {routeReducer} from 'redux-simple-router';
import {combineReducers} from 'redux';

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

export default combineReducers({routing: routeReducer, catalog, filter, content, detail});
