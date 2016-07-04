import React, { Component, PropTypes } from 'react';
// import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import styles from './styles';
import GSAP from 'react-gsap-enhancer';


function appearAnim(utils) {
  return new TimelineMax()
    .from(utils.target, 0.7, {
      height: 0,
      ease: Back.easeOut,
      onComplete: utils.options.callback
    });
}

function leaveAnim(utils) {
  return new TimelineMax()
    .to(utils.target, 0.5, {
      height: 0,
      ease: Sine.easeOut,
      onComplete: utils.options.callback
    });
}

class Item extends Component {

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
    const { description, title, id } = this.props.item;
    return (
      <div className={styles.item}>
        {title} - {description} <Link to={`catalog/${id}`}>></Link>
      </div>
    );
  }
}

Item.propTypes = {
  enterDuration: PropTypes.number,
  leaveDuration: PropTypes.number,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number
  }).isRequired
};

export default GSAP()(Item);
