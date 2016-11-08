import app from 'styles/views/App'

import React, { Component, PropTypes } from 'react'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    return (
      <div className={app.container}>
        <h1>About</h1>
        <p>Static page.</p>
        <Footer />
      </div>
    )
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(About)
