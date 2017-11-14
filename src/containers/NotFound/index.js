import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { H1 } from 'components/Typography'
import { RouterWrapper } from '../App/components'

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <RouterWrapper>
        <H1>Not Found</H1>
      </RouterWrapper>
    )
  }
}

export default connect()(NotFound)
