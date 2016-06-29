import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './catalog';
import visibilityFilter from './visibility';

export default function createReducer() {
  return combineReducers({
    routing: routerReducer,
    catalog: items,
    filter: visibilityFilter
  });
}
