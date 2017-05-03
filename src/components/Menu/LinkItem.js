import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class LinkItem extends Component {

  static propTypes = {
    route: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string,
    isExternal: PropTypes.bool,
  }

  static defaultProps = {
    isExternal: false,
  }

  renderLink() {
    const { route, link, text, isExternal } = this.props
    const active = route === link ? 'active' : ''
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )
    }
    return (
      <Link to={`${link}`} className={classnames('menu-link', active)}>
        {text}
      </Link>
    )
  }

  render() {
    return (
      <li>
        {this.renderLink()}
      </li>
    )
  }
}

export default LinkItem
