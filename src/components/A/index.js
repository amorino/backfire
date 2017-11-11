import styled from 'styled-components'
import { ds } from 'design'

const A = styled.a`
  color: ${ds.color('dark')}
  &:hover {
    color: ${ds.color('dark', 'lighter')}
  }
`
export default A
