import Shevy from 'shevyjs'

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#ff0000',
  grey: '#cccccc',
}

export const provider = {
  breakpoints: [
    32, 48, 64,
  ],
  space: [
    0, 6, 12, 18, 24,
  ],
}

export const shevy = new Shevy({
  baseFontSize: '14px',
  baseLineHeight: 1.5,
  baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  addMarginBottom: false,
  proximity: false,
  proximityFactor: 0.85,
})
