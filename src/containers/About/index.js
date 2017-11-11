import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    return (
      <div className="AppContainer">
        <h2>About</h2>
        <p>This is a static page.</p>
      </div>
    )
  }
}

export default connect()(About)
