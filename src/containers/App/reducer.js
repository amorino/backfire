// @flow

import type { Action } from './actions'
import type { Size } from './types'

type State = {
  size: Size,
};

const initialState = {
  size: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
}

const app = (state: State = initialState, { payload, type }: Action) => {
  switch (type) {
    case 'APP_RESIZE':
      return { ...state, size: payload }
    default:
      return state
  }
}

export default app
