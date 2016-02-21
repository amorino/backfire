import React, {Component} from 'react';
import MenuListItem from './MenuListItem';
import styles from './styles';

const menuItems = [
  {
    text: 'Home',
    link: '/'
  }, {
    text: 'About',
    link: '/about'
  }, {
    text: 'Items',
    link: '/catalog'
  }
];

export default class Menu extends Component {
  render() {
    const items = menuItems.map((item, i) => <MenuListItem {...item} key={i}/>);
    return (
      <div className={styles.menu}>
        <ul>{items}</ul>
      </div>
    );
  }
}
