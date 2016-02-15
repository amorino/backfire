export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const SET_ITEM_FILTER = 'SET_ITEM_FILTER';

export function getAllItems() {
  return {type: GET_ALL_ITEMS};
}

export function receiveItems(items) {
  return {type: RECEIVE_ITEMS, items};
}

export function filterItem(filter) {
  return {type: SET_ITEM_FILTER, filter};
}
