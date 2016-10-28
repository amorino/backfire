export function appearAnim({ target, options }) {
  return new TimelineMax()
    .fromTo(target, 0.7, {
      height: 0,
    }, {
      height: 100,
      ease: Back.easeOut,
      onComplete: options.callback,
    })
}

export function leaveAnim({ target, options }) {
  return new TimelineMax()
    .to(target, 1.1, {
      height: 0,
      ease: Back.easeIn,
      onComplete: options.callback,
    })
}
