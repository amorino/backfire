import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
class CatalogItem extends Component {

  render() {
    const { item } = this.props;

    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td><Link to={`/catalog/${item.id}`}>View Item</Link></td>
      </tr>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CatalogItem;
