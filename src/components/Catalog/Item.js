import React, { Component, PropTypes } from 'react';
// import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import styles from 'styles/views/Catalog';
import gsap from 'react-gsap-enhancer';
import { appearAnim, leaveAnim } from 'animations/catalog';

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
        {title} - {description} <Link to={`catalog/${id}`}>{'>'}</Link>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
};

export default gsap()(Item);