// Routes
export function routeAppear(utils) {
  const direction = utils.options.direction;
  return new TimelineMax()
    .fromTo(utils.target, 0.5, {
      x: direction.in,
    }, {
      x: '0%',
      ease: Sine.easeOut,
      overwrite: 'all',
      onComplete: utils.options.callback,
    });
}

export function routeLeave(utils) {
  const direction = utils.options.direction;
  return new TimelineMax()
    .fromTo(utils.target, 0.5, {
      x: '0%',
    }, {
      x: direction.out,
      ease: Sine.easeIn,
      overwrite: 'all',
      onComplete: utils.options.callback,
    });
}
