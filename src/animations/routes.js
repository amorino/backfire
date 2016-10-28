export function routeAppear({ target, options }) {
  const direction = options.direction
  return new TimelineMax()
    .fromTo(target, 0.5, {
      x: direction.in,
    }, {
      x: '0%',
      ease: Sine.easeOut,
      overwrite: 'all',
      onComplete: options.callback,
    })
}

export function routeLeave({ target, options }) {
  const direction = options.direction
  return new TimelineMax()
    .fromTo(target, 0.5, {
      x: '0%',
    }, {
      x: direction.out,
      ease: Sine.easeIn,
      overwrite: 'all',
      onComplete: options.callback,
    })
}
