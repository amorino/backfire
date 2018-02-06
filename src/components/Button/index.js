import styled, { css } from 'styled-components'
import { colors } from 'styles'

export const Button = styled.button`
  background: ${colors.black};
  color ${colors.white};
  padding: 7px 20px;
  transition background 0.5s ease-in-out;
  margin-left: 15px;
  font-family: inherit;
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
  ${props => props.active && css`
		color: ${colors.grey};
	`}
`

export default Button
