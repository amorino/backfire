import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouterWrapper } from '../App/components'

class About extends Component {
  render() {
    return (
      <RouterWrapper>
        <h2>About</h2>
        <p>This is a static page.</p>
      </RouterWrapper>
    )
  }
}

export default connect()(About)
