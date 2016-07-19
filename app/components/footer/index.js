import React, { Component } from 'react';
import styles from 'styles/components/footer';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div>
            &copy; 2015
        </div>
      </div>
    );
  }
}
