import React, { Component, PropTypes } from 'react';

class Filter extends Component {

  render() {
    const { onFilterChange } = this.props;

    return (
      <div>
        Filter: <input type="text" onChange={ event => onFilterChange(event.target.value) }/>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
