import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import _ from 'underscore';

const states = {
  beforeEnter: { y: 100, scale: 1.6, opacity: 0 },
  idle: { y: 0, scale: 1, opacity: 1 },
  afterLeave: { y: -100, scale: 0.7, opacity: 0 }
};

export default class Item extends Component {
  static animationStates = states;

  componentDidMount() {
    const el = findDOMNode(this);
    this.timeline = new TimelineMax()
      .pause()
      .add(TweenMax.to(el, 1, _.extend({}, Item.animationStates.beforeEnter, { ease: Linear.easeNone })))
      .add('beforeEnter')
      .add(TweenMax.to(el, 1, _.extend({}, Item.animationStates.idle, { ease: Linear.easeNone })))
      .add('idle')
      .add(TweenMax.to(el, 1, _.extend({}, Item.animationStates.afterLeave, { ease: Linear.easeNone })))
      .add('afterLeave')

    this.timeline.seek('beforeEnter');
  }

  componentWillAppear(callback) {
    this.timeline.seek('idle');
    callback();
  }

  componentWillEnter(callback) {
    this.timeline.seek('beforeEnter');
    TweenMax.killTweensOf(this.timeline);
    TweenMax.to(this.timeline, this.props.enterDuration, { time: this.timeline.getLabelTime('idle'), onComplete: callback, ease: Sine.easeOut });
  }

  componentWillLeave(callback) {
    this.timeline.pause();
    TweenMax.killTweensOf(this.timeline);
    TweenMax.to(this.timeline, this.props.leaveDuration, { time: this.timeline.getLabelTime('afterLeave'), onComplete: callback, ease: Sine.easeIn });
  }

  render() {
    const { description, title, id } = this.props.item;
    return (
      <div>
        {title} - {description} <Link to={`catalog/${id}`}>></Link>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.number
  }).isRequired
};
