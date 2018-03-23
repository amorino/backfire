// @flow

/**
 * Bind a listener to DOM or window
 * @param  {function} object              DOM object
 * @param  {string} event               Name of event
 * @param  {function} func              Function to bind
 */
export function addEvent(object: Function, event: string, func: Function) {
  object.addEventListener(event, func, false)
}

/**
 * Remove a listener from DOM or window
 * @param  {function} object              DOM object
 * @param  {string} event               Name of event
 * @param  {function} func              Function to bind
 */
export function removeEvent(object: Function, event: string, func: Function) {
  object.removeEventListener(event, func, false)
}
