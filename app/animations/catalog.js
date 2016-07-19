// Catalog Items
export function appearAnim(utils) {
  return new TimelineMax()
    .fromTo(utils.target, 0.7, {
      height: 0
    }, {
      height: 200,
      ease: Back.easeOut,
      onComplete: utils.options.callback
    });
}

export function leaveAnim(utils) {
  return new TimelineMax()
    .to(utils.target, 0.7, {
      height: 0,
      ease: Back.easeIn,
      onComplete: utils.options.callback
    });
}
