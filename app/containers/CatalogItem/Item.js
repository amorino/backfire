import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getItem } from '../../reducers/catalog';

class Item extends Component {
  render() {
    const { fetching, item } = this.props;
    return (
      <div>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <div>
            <h2>Item</h2>
            {item.title} - {item.description} - <Link to={'/catalog'}>Return</Link>
          </div>
        }
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string,
  fetching: PropTypes.bool,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
};

function mapStateToProps(state, props) {
  return {
    fetching: state.catalog.allIds.isFetching,
    item: getItem(state.catalog, props.id)
  };
}

export default connect(mapStateToProps)(Item);
