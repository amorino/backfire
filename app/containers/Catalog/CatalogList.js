import React, { Component, PropTypes } from 'react';
import Item from 'containers/Catalog/Item';
// import ReactTransitionGroupPlus from 'react-transition-group-plus';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from 'styles/containers/Catalog';

export default class CatalogList extends Component {

  state = {
    counter: 0,
    transitionMode: 'simultaneous',
  };

  render() {
    const { fetching, catalog } = this.props;
    return (
      <div className={styles.list}>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <ReactTransitionGroup
            component="div"
            className={styles.items}
          >
            {catalog.map(
              item =>
                <Item
                  key={item.id}
                  enterDuration={this.state.enterDuration}
                  leaveDuration={this.state.leaveDuration}
                  item={item}
                />
            )}
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
    image: PropTypes.string.isRequired,
  })).isRequired,
};
