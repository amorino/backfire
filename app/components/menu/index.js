import React from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import styles from './styles';

const menu = [
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

const Menu = ({current}) => {
  const items = menu.map((item, i) => <ListItem {...item} key={i} route={current} />);
  return (
    <div className={styles.menu}>
      <ul>{items}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {current: state.routing.locationBeforeTransitions.pathname};
}

export default connect(mapStateToProps)(Menu);
