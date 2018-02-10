import styled, { css } from 'styled-components'
import { Button } from 'components/Button'
import { fontSize } from 'styled-system'

export const AppRoot = styled.div`
  width: 100%;
  ${fontSize}
`

export const RouterWrapper = styled.div`
  width: 100%;
  top: 0;
  ${props => props.background && css`
		background: ${props.background};
	`}
`

export const AppWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const NormalButton = Button.extend``
