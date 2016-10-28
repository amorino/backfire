import { combineReducers } from 'redux'
import { RECEIVE_ITEMS, REQUEST_ITEMS } from 'actions/catalog'

function catalogItems(state = { fetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, fetching: true }
    case RECEIVE_ITEMS:
      return {
        ...state,
        fetching: false,
        items: action.items.reduce((obj, item) => {
          const result = obj
          result[item.id] = item
          return result
        }, {}),
      }
    default:
      return state
  }
}

function catalogIds(state = { ids: [] }, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state }
    case RECEIVE_ITEMS:
      return { ids: action.items.map(item => item.id) }
    default:
      return state
  }
}

export function getItem(state, id) {
  return state.catalogItems.items[id]
}

export function getItems(state) {
  return state.catalogIds.ids.map(id => getItem(state, id))
}

export default combineReducers({ catalogItems, catalogIds })
