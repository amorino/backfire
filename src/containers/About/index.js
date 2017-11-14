import React, { Component } from 'react'
import { connect } from 'react-redux'
import { H1, P } from 'components/Typography'
import { RouterWrapper } from '../App/components'

class About extends Component {
  render() {
    return (
      <RouterWrapper>
        <H1>About</H1>
        <P>This is a static page.</P>
      </RouterWrapper>
    )
  }
}

export default connect()(About)
