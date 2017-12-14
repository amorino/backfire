import styled, { css } from 'styled-components'
import { colors, fontFamily } from 'styles'

export const Button = styled.button`
  background: ${colors.black};
  color ${colors.white};
  padding: 7px 20px;
  transition background 0.5s ease-in-out;
  margin-left: 15px;
  font-family: ${fontFamily.lato};
  &:first-of-type {
    margin-left 0;
  }
  &:hover {
    background: ${colors.grey};
  }
  ${props => props.active && css`
		background: ${colors.grey};
	`}
`

export const ClearButton = styled.button`
  background: transparent;
  color ${colors.black};
  padding: 7px 20px;
  transition background 0.5s ease-in-out;
  margin-left: 15px;
  &:first-of-type {
    margin-left 0;
  }
  &:hover {
    color: ${colors.lightingYellow};
  }
  ${props => props.active && css`
		color: ${colors.lightingYellow};
	`}
`

export default Button
