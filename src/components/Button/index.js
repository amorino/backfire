// @flow
import styled, { css } from 'styled-components'
import { colors } from '../../styles'

export const Button = styled.button`
  background: ${colors.black};
  color: ${colors.white};
  padding: 7px 20px;
  transition: background 0.5s ease-in-out;
  font-family: inherit;
  &:hover {
    background: ${colors.grey};
  }
  ${props => props.active && css`
		background: ${colors.grey};
	`}
`

export const ClearButton = styled.button`
  background: transparent;
  color: inherit;
  padding: 7px 20px;
`
