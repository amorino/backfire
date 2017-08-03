import 'styles/views/NotFound'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="app__wrapper">
        <h2>Not Found</h2>
        <Footer />
      </div>
    )
  }
}

export default connect()(NotFound)
