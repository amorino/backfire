import 'styles/views/About'

import React, { Component, PropTypes } from 'react'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'
import { ShareButtons } from 'react-share'

const { FacebookShareButton } = ShareButtons

class About extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="app__container">
        <h2>About</h2>
        <p>This is a static page.</p>
        <FacebookShareButton
          url={'https://www.google.com'}
          title={'About'}
        >
          Share Facebook
        </FacebookShareButton>
        <Footer />
      </div>
    )
  }
}

export default connect()(About)
