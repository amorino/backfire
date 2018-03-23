// @flow
import styled, { css } from 'styled-components'
import { fontSize } from 'styled-system'

export const AppRoot = styled.div`
  width: 100%;
  ${fontSize}
`

export const RouterWrapper = styled.div`
  width: 100%;
  top: 0;
  position: absolute;
  ${props => props.background && css`
		background: ${props.background};
	`}
`

export const AppWrapper = styled.div`
  width: 100%;
  position: relative;
`

