import {routeReducer} from 'react-router-redux';
import {combineReducers} from 'redux-immutable';
import items from './catalog';
import visibilityFilter from './visibility';

export default combineReducers({route: routeReducer, catalog: items, filter: visibilityFilter});
