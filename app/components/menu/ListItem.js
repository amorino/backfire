import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class ListItem extends Component {

  static defaultProps = {
    isExternal: false
  };

  renderLink() {
    const { route, link, text, isExternal } = this.props;
    const active = route === link ? 'active' : '';
    if (isExternal) {
      return (
        <a href={link} target="_blank">
          {text}
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

ListItem.propTypes = {
  route: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  isExternal: PropTypes.bool
};
