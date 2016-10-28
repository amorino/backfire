export const GET_ALL_ITEMS = 'catalog/all'
export const RECEIVE_ITEMS = 'catalog/recive'
export const REQUEST_ITEMS = 'catalog/request'
export const SET_VISIBILITY_FILTER = 'catalog/filter'

export function getAllItems() {
  return {
    type: GET_ALL_ITEMS,
  }
}

export function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items,
  }
}

export function requestItems(items) {
  return {
    type: REQUEST_ITEMS,
    items,
  }
}

export function filterItem(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
