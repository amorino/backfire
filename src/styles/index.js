import { css } from 'styled-components'

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 609,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media (max-width: ${sizes[label] / 16}em) {
    ${css(...args)}
  }
	`
  return acc
}, {})

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#ff0000',
  grey: '#cccccc',
}

export const provider = {
  breakpoints: [
    `${sizes.mobile}`, `${sizes.tablet}px`, `${sizes.desktop}px`,
  ],
  space: [
    0, 6, 12, 18, 24,
  ],
  fontSizes: [
    12, 14, 16, 24, 36, 72,
  ],
}

export const fontFamily = {
  gotham: 'Gotham, sans-serif',
}
