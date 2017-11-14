import styled, { css } from 'styled-components'
import { colors } from 'styles'

const Button = styled.button`
  background: ${colors.black};
  color ${colors.white};
  padding: 7px 20px;
  transition background 0.5s ease-in-out;
  margin-left: 15px;
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

export default Button
