import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="AppContainer">
        <h2>Not Found</h2>
      </div>
    )
  }
}

export default connect()(NotFound)
