import { css } from 'styled-components'
import { ds } from 'design'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 0;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: pointer;
  font-family: ${ds.get('type.fontFamilyBase')};
  font-size: ${ds.fs(0)};
  color: ${ds.color('white')};
  background: ${ds.color('dark')};
  &:hover {
    background: ${ds.color('dark', 'light')};
    color: ${ds.color('white')};
  }
`

export default buttonStyles
