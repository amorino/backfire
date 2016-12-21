import 'styles/views/NotFound'

import React, { Component, PropTypes } from 'react'
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
