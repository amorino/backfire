import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from 'components/Catalog/Item';
// import ReactTransitionGroup from 'react-transition-group-plus';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from 'styles/views/Catalog';
import { getItems } from 'reducers/catalog';

const getFilteredItems = (catalog, filter) => {
  switch (filter) {
    case 'all':
      return catalog;
    case 'art':
      return catalog.filter(t => t.type === 'art');
    case 'music':
      return catalog.filter(t => t.type === 'music');
    default:
      return catalog;
  }
};

class CatalogList extends Component {

  state = {
    transitionMode: 'simultaneous',
  };

  render() {
    const { fetching, catalog } = this.props;
    return (
      <div className={styles.list}>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
        <ReactTransitionGroup component="div" className={styles.items} >
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

const mapStateToProps = state => ({
  catalog: getFilteredItems(getItems(state.catalog), state.filter),
  fetching: state.catalog.catalogItems.fetching,
});

export default connect(mapStateToProps)(CatalogList);
