import catalog from '../data/catalog.json'
import * as types from '../constants/ActionTypes'

function requestItems() {
  return {
    type: types.REQUEST_ITEMS
  };
}

function receiveItems(content) {
  return {
    type: types.RECEIVE_ITEMS,
    content
  };
}

export function fetchCatalog() {
  return dispatch => {
    dispatch(requestItems());
    setTimeout(() =>
      dispatch(receiveItems(catalog)), 100);
  };
}

export function setItemFilter(filter) {
  return {
    type: types.SET_ITEM_FILTER,
    filter
  };
}

export function fetchItem(itemId) {
  return {
    type: types.FETCH_ITEM,
    detail: catalog.find(item => item.id == itemId)
  };
}
