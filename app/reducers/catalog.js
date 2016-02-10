import {REQUEST_ITEMS, RECEIVE_ITEMS, SET_ITEM_FILTER} from '../constants/ActionTypes';
import {createReducer} from '../utils/createReducer';

export const catalog = createReducer({
  isFetching: false
}, {
  [REQUEST_ITEMS]: (state, action) => {
    return Object.assign({}, state, {isFetching: true});
  },
  [RECEIVE_ITEMS]: (state, action) => {
    return Object.assign({}, state, {isFetching: false});
  }
});

export const filter = createReducer('', {
  [SET_ITEM_FILTER]: (state, action) => {
    return action.filter;
  }
});
