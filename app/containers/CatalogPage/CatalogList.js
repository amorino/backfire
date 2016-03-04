import React, {Component, PropTypes} from 'react';
// import Item from './Item';
import {TransitionMotion, spring, presets} from 'react-motion';
import {Link} from 'react-router';
// import Transition from 'react-motion-ui-pack';

export default class CatalogList extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }

  getDefaultStyles() {
    return this.props.catalog.map(item => ({...item, key: '' + item.id, style: {height: 0, opacity: 1}}));
  }

  getStyles() {
    return this.props.catalog.map((item) => {
      return {
        key: item.id,
        data: item,
        style: {
          height: spring(60, presets.gentle),
          opacity: spring(1, presets.gentle),
        }
      };
    });
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1,
    };
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  }

  render() {
    // const {catalog} = this.props;
    // <ul className="todo-list">
    //   {catalog.map(item => <Item key={item.id} item={item} />)}
    // </ul>
    return (
      <div>
        <h3>Items</h3>
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles}
          willLeave={this.willLeave}
          willEnter={this.willEnter}
        >
          {styles =>
            <ul>
            {styles.map(
              config => {
                return (
                  <li key={config.key} style={{...config.style}}>
                    {config.data.title} - {config.datadescription} - <Link to={`catalog/${config.data.id}`}>{config.data.id}</Link>
                  </li>
                );
              })}
            </ul>
          }
        </TransitionMotion>
      </div>
    );
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, image: PropTypes.string.isRequired})).isRequired
};
