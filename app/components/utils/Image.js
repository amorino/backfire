import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 0
    };
  }

  fadeIn = () => {
    this.setState({ opacity: 1 });
  };

  render() {
    // this vs including an Object.assign polyfill
    const { src, speed } = this.props;
    const style = this.props.style || {};
    style.transition = `opacity ${speed || 1}s`;
    style.opacity = this.state.opacity;
    return (
      <img
        alt={'loaded'}
        {...this.props}
        style={style}
        src={src}
        onLoad={this.fadeIn}
      />);
  }
}

Image.propTypes = {
  src: PropTypes.string,
  speed: PropTypes.int,
  style: PropTypes.string
};
