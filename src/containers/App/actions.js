// @flow
import type { Size } from './types'

export type ResizeAction = {
  type: 'APP_RESIZE',
  payload: Size,
}

export type Action =
  | ResizeAction


export const resize = (payload: Size): ResizeAction => ({
  type: 'APP_RESIZE',
  payload,
})

export default resize
