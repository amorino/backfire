import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { H1, P } from 'components/Typography'
import { RouterWrapper } from '../App/styled'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <RouterWrapper background="papayawhip">
        <H1>Backfire</H1>
        <P>Welcome to Backfire.</P>
      </RouterWrapper>
    )
  }
}

export default connect()(Home)
