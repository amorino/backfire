import {routeReducer} from 'react-router-redux';
import {combineReducers} from 'redux-immutable';
import items from './catalog';

export default combineReducers({route: routeReducer, catalog: items});
