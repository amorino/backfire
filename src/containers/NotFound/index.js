import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RouterWrapper } from '../App/components'

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <RouterWrapper>
        <h2>Not Found</h2>
      </RouterWrapper>
    )
  }
}

export default connect()(NotFound)
