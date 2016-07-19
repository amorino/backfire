export const RESIZE = 'app/resize';

export function resize(width, height) {
  return {
    type: RESIZE,
    size: { width, height },
  };
}
