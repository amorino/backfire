import React, { Component, PropTypes } from 'react';
import Item from './Item';
import ReactTransitionGroupPlus from 'react-transition-group-plus';
import styles from './styles';

export default class CatalogList extends Component {

  state = {
    counter: 0,
    transitionMode: 'simultaneous',
    enterDuration: 0.3,
    leaveDuration: 0.3
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { fetching, catalog } = this.props;
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
      <div>
        <button className="cta-button" onClick={this.handleClick}>
          Animate!
        </button>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <ReactTransitionGroupPlus
            component="div"
            className={styles.group}
            transitionMode={this.state.transitionMode}
            deferLeavingComponentRemoval={false}
          >
            {items}
          </ReactTransitionGroupPlus>
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
