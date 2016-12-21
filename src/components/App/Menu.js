import 'styles/components/Menu'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LinkItem from 'components/Menu/LinkItem'

const menu = [
  {
    text: 'Home',
    link: '/',
  }, {
    text: 'About',
    link: '/about',
  }, {
    text: 'Items',
    link: '/catalog',
  },
]

class Menu extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired,
  }

  render() {
    const { current } = this.props
    const items = menu.map((item, i) => <LinkItem {...item} key={i} route={current} />)
    return (
      <div className="menu">
        <ul>{items}</ul>
      </div>
    )
  }
}

export default connect()(Menu)
