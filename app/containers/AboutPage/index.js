import React, {Component} from 'react';
import styles from './styles';
import Footer from 'components/footer';

export default class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <p>This is a static page</p>
        <Footer />
      </div>
    );
  }
}
