import React, {Component} from 'react';
import styles from './styles.styl';
import Footer from 'components/footer';
export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.wrapper}>
          <h1>About</h1>
          <p>This is a static page</p>
          <Footer/>
        </div>
      </div>
    );
  }
}