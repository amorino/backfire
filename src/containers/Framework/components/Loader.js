// @flow
import * as React from 'react'
import { RootLoader, Container, Square, Line, Text } from '../styled/Loader'

type Props = {
  percentage: number
}

const Loader = ({ percentage }: Props) => {
  return (
    <RootLoader>
      <Container>
        <Square />
        <Text>{percentage}%</Text>
        <Line style={{ width: `${percentage}%` }} />
      </Container>
    </RootLoader>
  )
}

export default Loader
