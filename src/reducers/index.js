import {catalog, filter} from './catalog';
import merge from 'lodash/object/merge';
import {routerStateReducer as router} from 'redux-router';
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

export default combineReducers({router, catalog, filter, content, detail});
