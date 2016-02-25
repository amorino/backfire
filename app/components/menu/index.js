import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class Menu extends Component {
  render() {
    const {current} = this.props;
    const items = menuItems.map((item, i) => <MenuListItem {...item} key={i} route={current} />);
    return (
      <div className={styles.menu}>
        <ul>{items}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {current: state.get('route').location.pathname};
}

export default connect(mapStateToProps)(Menu);
