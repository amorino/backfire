import React, {Component, PropTypes} from 'react';
import Item from './Item';

export default class CatalogList extends Component {
  render() {
    const {catalog} = this.props;
    return (
      <div>
        <h3>Items</h3>
        {catalog.map(item => <Item key={item.id} item={item} />)}
      </div>
    );
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, image: PropTypes.string.isRequired})).isRequired
};
