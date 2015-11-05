import { FETCH_ITEMS, SEARCH_ITEMS, GET_ITEM } from '../constants/ActionTypes';
import Items from '../data/items';

const initialState = {
  items: null,
  searchTerm: ''
};

//TODO: use immutable objects in state
const actionsMap = {
  [FETCH_ITEMS]: (state, action) => {
    return {
      items: action.fetchItems,
    };
  },
  [SEARCH_ITEMS]: (state, action) => {
    return {
      searchTerm: action.searchTerm
    }
  }
}

export default function items (state = [], action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return Object.assign({}, state, reduceFn(state, action));
}
