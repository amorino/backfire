import {combineReducers} from 'redux';
import {RECEIVE_ITEMS} from '../actions';

function items(state) {
  return state;
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {})
      };
    default:
      const {itemId} = action;
      if (itemId) {
        return {
          ...state,
          [itemId]: items(state[itemId], action)
        };
      }
      return state;
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items.map(item => item.id);
    default:
      return state;
  }
}

export default combineReducers({byId, visibleIds});

export function getItem(state, id) {
  return state.byId[id];
}

export function getVisibleItems(state) {
  return state.visibleIds.map(id => getItem(state, id));
}
