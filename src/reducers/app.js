import { RESIZE } from 'actions/app'

const initialState = {
  size: {
    width: window.innerWidth,
    height: window.innerHeight,
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
