import React, { PropTypes, Component } from 'react';
import MenuListItem from './MenuListItem';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Amorino', link: '/users/amorino' },
  { text: 'Item', link: '/item/1' },
  { text: 'Items', link: '/items' }
];

export default class Menu extends Component {

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div id="menu" ref="menu">
          <ul>
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
      </div>
    )
  }
}
