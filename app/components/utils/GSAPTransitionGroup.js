import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import gsap from 'react-gsap-enhancer';

function leave(utils) {
  return TweenMax.to(utils.target, 1, {
    y: 100,
    autoAlpha: 0
  });
}
function enter(utils) {
  return TweenMax.from(utils.target, 1, {
    y: 100,
    autoAlpha: 0
  });
}

class GSAPTransitionGroup extends Component {
  static contextTypes = {
    location: React.PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      previousPathname: null
    };
  }

  componentDidMount() {
    // const node = ReactDOM.findDOMNode(this);
    this.addAnimation(enter);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.location !== this.props.location) {
      this.setState({previousPathname: this.props.location});
    }
  }

  componentDidUpdate() {
    // const node = ReactDOM.findDOMNode(this);
    if (this.state.previousPathname) {
      // this.setState({previousPathname: null});
      this.addAnimation(enter);
    }
  }
  componentWillUnmount() {
    this.addAnimation(leave);
  }

  render() {
    const {
      children,
      ...props
    } = this.props;
    // const {previousPathname} = this.state;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default gsap()(GSAPTransitionGroup);
