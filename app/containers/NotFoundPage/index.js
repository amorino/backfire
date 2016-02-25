import React, {Component} from 'react';
import styles from './styles';
import Footer from 'components/footer';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.notfound}>
        <div className={styles.wrapper}>
          <h1>Not Found</h1>
          <p>Page not found.</p>
          <Footer/>
        </div>
      </div>
    );
  }
}
