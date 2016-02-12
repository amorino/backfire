import React, {Component} from 'react';
import MenuListItem from './MenuListItem';

const menuItems = [
  {
    text: 'Home',
    link: '/'
  }, {
    text: 'About',
    link: '/about'
  }, {
    text: 'Items',
    link: '/items'
  }
];

export default class Menu extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const items = menuItems.map((item, i) => <MenuListItem {...item} key={i}/>);
    return (
      <div id="menu" ref="menu">
        <ul>{items}</ul>
      </div>
    );
  }
}
