export const RESIZE = 'app/resize'

export const resize = (width, height) => ({
  type: RESIZE,
  payload: { width, height },
})
