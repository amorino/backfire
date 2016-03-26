import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import items from './catalog';
import visibilityFilter from './visibility';

/**
 * Creates the main reducer
*/
export default function createReducer() {
  return combineReducers({
    routing: routerReducer,
    catalog: items,
    filter: visibilityFilter
  });
}
