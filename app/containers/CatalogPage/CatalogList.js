import React, {Component, PropTypes} from 'react';
// import Item from './Item';
import {TransitionMotion, spring} from 'react-motion';
import {Link} from 'react-router';
import styles from './styles';
// import Transition from 'react-motion-ui-pack';

export default class CatalogList extends Component {

  state = {
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getDefaultStyles = () => {
    return this.props.catalog.map(item => ({
      ...item,
      key: '' + item.id,
      style: {
        size: 0,
        scale: 0,
        opacity: 1
      }
    }));
  }

  getStyles = () => {
    let responsive;
    switch (true) {
      case this.state.windowWidth < 560 && this.state.windowWidth > 0:
        responsive = 4;
        break;
      case this.state.windowWidth < 768 && this.state.windowWidth > 560:
        responsive = 2;
        break;
      case this.state.windowWidth > 769:
        responsive = 1;
        break;
      default:
        responsive = 1;
    }

    return this.props.catalog.map(item => {
      return {
        key: item.id,
        data: item,
        style: {
          size: spring(99 * (responsive / 4)),
          scale: spring(1),
          opacity: spring(1),
        }
      };
    });
  }


  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  willEnter = () => {
    return {
      size: 0,
      scale: 0,
      opacity: 1,
    };
  }

  willLeave = () => {
    return {
      size: spring(0),
      scale: spring(0),
      opacity: spring(0),
    };
  }

  render() {
    const {fetching} = this.props;
      // <ul className="todo-list">
      //   {catalog.map(item => <Item key={item.id} item={item} />)}
      // </ul>
    return (
      <div>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
          >
            {current =>
              <div className={styles.items}>
                {current.map(key => {
                  const { scale, opacity, size } = key.style;
                  const style = {
                    transform: `scale(${scale})`,
                    // transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)`,
                    opacity,
                    width: `calc(${size}% - 30px`,
                  };
                  return (
                    <div
                      key={key.key}
                      style={style}
                      className={styles.item}
                    >
                      {key.data.title} - {key.data.description} - <Link to={`catalog/${key.data.id}`}>></Link>
                    </div>
                    );
                })}
              </div>
            }
          </TransitionMotion>
        }
      </div>
      );
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
