import counter from './counter';
import {default as products} from './products';
import {catalog, filter} from './catalog';
import * as ActionTypes from '../actions/github';
import merge from 'lodash/object/merge';
import paginate from './paginate';
import {routerStateReducer as router} from 'redux-router';
import {combineReducers} from 'redux';

function content(state = null, action) {
    return action.content
        ? action.content
        : state;
}

// Updates an entity cache in response to any action with response.entities.
function entities(state = {
    users: {},
    repos: {}
}, action) {
    if (action.response && action.response.entities) {return merge({}, state, action.response.entities);}

    return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const {type, error} = action;

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {return null;} else if (error) {return action.error;}

    return state;
}

// Updates the pagination data for different actions.
const pagination = combineReducers({starredByUser: paginate({
        mapActionToKey: action => action.login,
        types: [ActionTypes.STARRED_REQUEST, ActionTypes.STARRED_SUCCESS, ActionTypes.STARRED_FAILURE]
    }), stargazersByRepo: paginate({
        mapActionToKey: action => action.fullName,
        types: [ActionTypes.STARGAZERS_REQUEST, ActionTypes.STARGAZERS_SUCCESS, ActionTypes.STARGAZERS_FAILURE]
    })});

export default combineReducers({entities, pagination, errorMessage, router, counter, catalog, filter, content});
