import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MenuListItem from './MenuListItem';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Item', link: '/item/77' },
  { text: 'Item', link: '/item/1' }
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
