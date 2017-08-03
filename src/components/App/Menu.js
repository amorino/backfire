import 'styles/components/Menu'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LinkItem from 'components/Menu/LinkItem'

const menu = [{
  text: 'Home',
  link: '/',
}, {
  text: 'About',
  link: '/about',
}, {
  text: 'Items',
  link: '/catalog',
}]

class Menu extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired,
  }

  render() {
    const { current } = this.props
    const items = menu.map(item => <LinkItem {...item} key={item.text} route={current} />)
    return (
      <div className="menu">
        <ul>{items}</ul>
      </div>
    )
  }
}

export default connect()(Menu)
