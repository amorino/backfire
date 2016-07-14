import React, { Component } from 'react';
import styles from './styles';
import Footer from 'components/footer';
import { appearAnim, leaveAnim } from 'animations';
import gsap from 'react-gsap-enhancer';

class Home extends Component {
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
      <div className={styles.home}>
        <h1>Home</h1>
        <p>This is a static page</p>
        <Footer />
      </div>
    );
  }
}
export default gsap()(Home);
