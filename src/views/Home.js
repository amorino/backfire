import 'styles/views/Home'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="app__container" ref={node => this.node = node}>
        <h2>Welcome to Backfire</h2>
        <p>This is a static page.</p>
        <Footer />
      </div>
    )
  }
}

export default connect()(Home)
