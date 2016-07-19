import React, { Component, PropTypes } from 'react';
import gsap from 'react-gsap-enhancer';
import { routeAppear, routeLeave } from 'animations/routes';

class AnimateChildren extends Component {
  componentWillAppear(callback) {
    this.addAnimation(routeAppear, { callback });
  }

  componentWillEnter(callback) {
    this.addAnimation(routeAppear, { callback });
  }

  componentWillLeave(callback) {
    this.addAnimation(routeLeave, { callback });
  }

  render() {
    const { children, style } = this.props;
    return (
      <div className={style} >
         {children}
      </div>
    );
  }
}

AnimateChildren.propTypes = {
  children: PropTypes.any,
  style: PropTypes.string
};

export default gsap()(AnimateChildren);
