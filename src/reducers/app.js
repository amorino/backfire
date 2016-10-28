import { RESIZE } from 'actions/app'

const initialState = {
  size: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case RESIZE:
      return { ...state, size: action.size }
    default:
      return state
  }
}
