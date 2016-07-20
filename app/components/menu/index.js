import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LinkItem from 'components/utils/LinkItem';
import styles from 'styles/components/menu';

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
];

class Menu extends Component {
  render() {
    const { current } = this.props;
    const items = menu.map((item, i) => <LinkItem {...item} key={i} route={current} />);
    return (
      <div className={styles.menu}>
        <ul>{items}</ul>
      </div>
    );
  }
}

Menu.propTypes = {
  current: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return { current: state.routing.locationBeforeTransitions.pathname };
}

export default connect(mapStateToProps)(Menu);
