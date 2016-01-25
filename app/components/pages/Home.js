import React, {Component} from 'react';
import styles from './Home.styl';
import Footer from './Footer'

export default class About extends Component {
  render() {
    // let i = require('images/banner.jpg');
    return (
      <div>
        <div>
          <h1 className={styles.heading1}>Home</h1>
        </div>
        <div>
          <p>This is a static page</p>
        </div>

        <Footer/>
      </div>
    )
  }
}
