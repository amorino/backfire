import React from 'react'
import PropTypes from 'prop-types'
import { RootLoader, Container, Square, Line, Text } from './components/Loader'

const Loader = ({ percentage }) => {
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

Loader.propTypes = {
  percentage: PropTypes.number,
}

Loader.defaultProps = {
  percentage: 0,
}

export default Loader
