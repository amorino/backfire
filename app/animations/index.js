// Routes
export function routeAppear(utils) {
  return new TimelineMax()
    .from(utils.target, 0.5, {
      alpha: 0,
      ease: Sine.easeOut,
      overwrite: 'all',
      onComplete: utils.options.callback
    });
}

export function routeLeave(utils) {
  return new TimelineMax()
    .to(utils.target, 0.5, {
      alpha: 0,
      ease: Sine.easeIn,
      overwrite: 'all',
      onComplete: utils.options.callback
    });
}

// Catalog Items
export function appearAnim(utils) {
  return new TimelineMax()
    .fromTo(utils.target, 0.7, {
      width: 0
    }, {
      width: 200,
      ease: Power2.easeOut,
      onComplete: utils.options.callback
    });
}

export function leaveAnim(utils) {
  return new TimelineMax()
    .to(utils.target, 0.7, {
      width: 0,
      ease: Power2.easeOut,
      onComplete: utils.options.callback
    });
}
