import { RESIZE } from 'actions/app'

const initialState = {
  size: {
    width: 0,
    height: 0,
  },
}

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESIZE:
      return { ...state, size: payload }
    default:
      return state
  }
}

export default app
