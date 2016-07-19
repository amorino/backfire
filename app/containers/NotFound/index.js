import React, { Component } from 'react';
import styles from 'styles/containers/NotFound';
import Footer from 'components/footer';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Not Found</h1>
        <p>Page not found.</p>
        <Footer />
      </div>
    );
  }
}
