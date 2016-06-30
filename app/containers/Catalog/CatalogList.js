import React, { Component, PropTypes } from 'react';
import Item from './Item';
import ReactTransitionGroupPlus from 'react-transition-group-plus';
// import { Link } from 'react-router';
// import styles from './styles';

export default class CatalogList extends Component {

  state = {
    transitionMode: 'out-in',
    transitionGroupComponent: ReactTransitionGroupPlus,
    enterDuration: 0.8,
    leaveDuration: 0.3
  };

  render() {
    const { fetching, catalog } = this.props;
    // const items = ;
    return (
      <div>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <ul className="todo-list">
            <ReactTransitionGroupPlus
              transitionMode={this.state.transitionMode}
              component="div"
              className="output-panel"
            >
            {catalog.map(
              item =>
                <Item
                  key={item.id + item.description}
                  enterDuration={this.state.enterDuration}
                  leaveDuration={this.state.leaveDuration}
                  item={item}
                />
            )}
            </ReactTransitionGroupPlus>
          </ul>
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
