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

function allIds(state = {
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

export default combineReducers({byId, allIds});

export function getItem(state, id) {
  return state.byId.items[id];
}

export function getItems(state) {
  return state.allIds.items.map(id => getItem(state, id));
}
