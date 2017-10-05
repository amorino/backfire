import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'

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
