import React, { Component, PropTypes } from 'react';
import gsap from 'react-gsap-enhancer';
import styles from './styles';
import { appearAnim, leaveAnim } from 'animations';

class AnimateChildren extends Component {

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
    const { children } = this.props;
    return (
      <div className={styles.container} >
        <div className={styles.wrapper}>
         {children}
        </div>
      </div>
    );
  }
}

AnimateChildren.propTypes = {
  children: PropTypes.any
};

export default gsap()(AnimateChildren);
