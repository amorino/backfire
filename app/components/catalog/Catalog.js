import React, {Component, PropTypes} from 'react';
import Filter from './Filter';
import CatalogItem from './CatalogItem';

class Catalog extends Component {

  renderChilds(items) {
    if (items === 0) {
      return 'No items found';
    }
    return items.map(item => <CatalogItem key={item.id} item={item}/>);
  }

  render() {
    const {items, actions} = this.props;
    return (
      <div>
        <Filter onFilterChange={actions.setItemFilter}/>
        <table>
          <tbody>
            {this.renderChilds(items)}
          </tbody>
        </table>
      </div>
    );
  }
}

Catalog.propTypes = {
  items: PropTypes.array.isRequired
};

export default Catalog;
