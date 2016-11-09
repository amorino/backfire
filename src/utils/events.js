import Modernizr from 'modernizr'
/**
 * Receive object, function and type of event to addEventListener or attachEvent
 *
 */
export function addEvent(object, event, func) {
  return Modernizr.eventlistener ? object.addEventListener(event, func, false) : object.attachEvent(`on${event}`, func)
}

/**
 * Receive object, function and type of event to removeEventListener or detachEvent
 *
 */
export function removeEvent(object, event, func) {
  return Modernizr.eventlistener ? object.removeEventListener(event, func, false) : object.detachEvent(`on${event}`, func)
}
