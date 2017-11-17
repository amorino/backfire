import styled from 'styled-components'
import { shevy } from 'styles'

const { h1, h2, content } = shevy

export const H1 = styled.h1`
  font-size: ${h1.fontSize};
  line-height: ${h1.lineHeight};
  margin-bottom: ${h1.marginBottom};
`

export const H2 = styled.h2`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  margin-bottom: ${h2.marginBottom};
`

export const P = styled.p`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
`
