import React, { Component } from 'react'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    return (
      <div className="app__container">
        <h2>About</h2>
        <p>This is a static page.</p>
        <Footer />
      </div>
    )
  }
}

export default connect()(About)
