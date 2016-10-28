import styles from 'styles/views/Home'

import React, { Component } from 'react'
import Footer from 'components/App/Footer'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Home</h1>
        <p>This is a static page</p>
        <Footer />
      </div>
    )
  }
}
