import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class MenuListItem extends Component {

  static propTypes = {
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    isExternal: false
  };

  constructor(props, context) {
    super(props, context);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = {
      isMenuActive: false
    };
  }

  handleMenuClick() {
    // evt.preventDefault();
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  }

  renderLink() {
    const {isMenuActive} = this.state;
    const activeClass = isMenuActive
      ? 'active'
      : '';
    if (this.props.isExternal) {
      return (
        <a href={this.props.link} target="_blank">
          {this.props.text}
        </a>
      );
    } else {
      return (
        <Link to={`${this.props.link}`} className={classnames('menu-link', activeClass)} onClick={this.handleMenuClick}>
          {this.props.text}
        </Link>
      );
    }
  }

  render() {
    return (
      <li>
        {this.renderLink()}
      </li>
    )
  }
}
