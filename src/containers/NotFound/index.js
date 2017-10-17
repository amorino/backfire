import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="AppContainer">
        <h2>Not Found</h2>
        <Footer />
      </div>
    )
  }
}

export default connect()(NotFound)
