import { RECEIVE_ITEMS, REQUEST_ITEMS, SET_VISIBILITY_FILTER } from './actions'

const init = {
  fetching: true,
  items: [],
  ids: [],
}

export const filter = (state = 'all', { type, payload }) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload
    default:
      return state
  }
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
