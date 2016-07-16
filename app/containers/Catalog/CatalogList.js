import React, { Component, PropTypes } from 'react';
import Item from './Item';
// import ReactTransitionGroupPlus from 'react-transition-group-plus';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from './styles';

export default class CatalogList extends Component {

  state = {
    counter: 0,
    transitionMode: 'simultaneous',
    enterDuration: 0.8,
    leaveDuration: 0.8
  };

  render() {
    const { fetching, catalog } = this.props;
    // transitionMode={this.state.transitionMode}
    // deferLeavingComponentRemoval={false}
    const items = catalog.map(
      item =>
        <Item
          key={item.id}
          enterDuration={this.state.enterDuration}
          leaveDuration={this.state.leaveDuration}
          item={item}
        />
    );
    return (
      <div className={styles.list}>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <ReactTransitionGroup
            component="div"
            className={styles.items}
          >
            {items}
          </ReactTransitionGroup>
        }
      </div>
      );
  }
}

CatalogList.propTypes = {
  fetching: PropTypes.bool,
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
