// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { H1 } from '../../components/Typography'
import { RouterWrapper } from '../App/styled'


class NotFound extends React.Component<void> {
  render() {
    return (
      <RouterWrapper>
        <H1>Not Found</H1>
      </RouterWrapper>
    )
  }
}

export default connect()(NotFound)
