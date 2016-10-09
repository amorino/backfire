import styles from 'styles/views/About';

import React, { Component } from 'react';
import Footer from 'components/App/Footer';

export default class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <p>Static page.</p>
        <Footer />
      </div>
    );
  }
}
