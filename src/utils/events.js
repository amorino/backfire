import Modernizr from 'modernizr'
/**
 * Bind a listener to DOM or window
 * @param  {string} object              DOM object
 * @param  {string} event               Name of event
 * @param  {function} func              Function to bind
 */
export function addEvent(object, event, func) {
  return Modernizr.eventlistener ? object.addEventListener(event, func, false) : object.attachEvent(`on${event}`, func)
}

/**
 * Remove a listener from DOM or window
 * @param  {string} object              DOM object
 * @param  {string} event               Name of event
 * @param  {function} func              Function to bind
 */
export function removeEvent(object, event, func) {
  return Modernizr.eventlistener ? object.removeEventListener(event, func, false) : object.detachEvent(`on${event}`, func)
}
