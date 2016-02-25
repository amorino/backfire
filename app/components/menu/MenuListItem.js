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
  }

  renderLink() {
    const {route, link, text, isExternal} = this.props;
    const active = route === link ? 'active' : '';
    if (isExternal) {
      return (
        <a href={link} target="_blank">
          {this.props.text}
        </a>
      );
    }
    return (
      <Link to={`${link}`} className={classnames('menu-link', active)}>
        {text}
      </Link>
    );
  }

  render() {
    return (
      <li>
        {this.renderLink()}
      </li>
    );
  }
}
