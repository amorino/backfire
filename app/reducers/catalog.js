import {combineReducers} from 'redux';
import {RECEIVE_ITEMS, REQUEST_ITEMS} from '../actions';

function byId(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {...state, isFetching: true};
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetching: false,
        items: action.items.reduce((obj, item) => {
          const result = obj;
          result[item.id] = item;
          return result;
        }, {})
      };
    default:
      return state;
  }
}

function visibleIds(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {...state, isFetching: true};
    case RECEIVE_ITEMS:
      return {isFetching: false, items: action.items.map(item => item.id)};
    default:
      return state;
  }
}

export default combineReducers({byId, visibleIds});

export function getItem(state, id) {
  return state.byId.items[id];
}

export function getVisibleItems(state) {
  if (state.visibleIds.items) {
    return state.visibleIds.items.map(id => getItem(state, id));
  }
  return {};
}
