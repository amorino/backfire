import React, { Component } from 'react';
import styles from './styles';
import Footer from 'components/footer';
import { appearAnim, leaveAnim } from 'animations';
import gsap from 'react-gsap-enhancer';

class About extends Component {

  componentWillAppear(callback) {
    this.addAnimation(appearAnim, { callback });
  }

  componentWillEnter(callback) {
    this.addAnimation(appearAnim, { callback });
  }

  componentWillLeave(callback) {
    this.addAnimation(leaveAnim, { callback });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <p>This is a static pages</p>
        <Footer />
      </div>
    );
  }
}

export default gsap()(About);
