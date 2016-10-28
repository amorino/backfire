import styles from 'styles/views/NotFound'

import React, { Component } from 'react'
import Footer from 'components/App/Footer'

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Not Found</h1>
        <p>Page not found.</p>
        <Footer />
      </div>
    )
  }
}
