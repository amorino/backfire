import { RECEIVE_ITEMS, REQUEST_ITEMS } from 'actions/catalog'

const init = {
  fetching: false, items: [], ids: [],
}

export const catalog = (state = init, { type, payload }) => {
  switch (type) {
    case REQUEST_ITEMS:
      return { ...state, fetching: true }
    case RECEIVE_ITEMS:
      return {
        ...state,
        fetching: false,
        items: payload.reduce((obj, item) => {
          const result = obj
          result[item.id] = item
          return result
        }, {}),
        ids: payload.map(item => item.id),
      }
    default:
      return state
  }
}

export const getItem = (state, id) => state.items[id]
export const getItems = state => state.ids.map(id => getItem(state, id))
