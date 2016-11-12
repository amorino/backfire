import { SET_VISIBILITY_FILTER } from 'actions/catalog'

const filter = (state = 'all', { type, payload }) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload
    default:
      return state
  }
}

export default filter
