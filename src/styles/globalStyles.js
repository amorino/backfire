// @flow
import { injectGlobal } from 'styled-components'
import { colors, fontFamily } from './'
import { fontFace } from './utils/fonts'

injectGlobal`
  ${fontFace({
    fontFamily: 'Gotham',
    fontFilePath: 'GothamMedium',
  })}

  body, html {
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    font-family: ${fontFamily.gotham};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${colors.black};
  }

  #root {
    width: 100%;
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: 0;
  }

  a {
    text-decoration: none;
  }
`
