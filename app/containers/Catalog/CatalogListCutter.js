/*eslint-disable*/
import React, { Component, PropTypes } from 'react';
// import Item from './Item';
import { SpringGrid, makeResponsive, layout } from 'react-stonecutter';
import { Link } from 'react-router';
import styles from './styles';

export default class CatalogListCutter extends Component {

  componentWillMount() {
    this.createGrid();
  }

  createGrid() {
    let Grid = SpringGrid;
    Grid = makeResponsive(Grid, {
      maxWidth: 1024,
      minPadding: 100
    });
    this.setState({ Grid });
  }

  render() {
    const { fetching, catalog } = this.props;
    const itemHeight = 190;
    const items = catalog.map(item => {
      return (
        <li
          className="grid-item"
          key={item.id}
          style={{
            width: 300,
            height: itemHeight
          }}
        >
          <div className={styles.item}>
            {item.title} - {item.description} - <Link to={`catalog/${item.id}`}>></Link>
          </div>
        </li>
      );
    });
    const { Grid } = this.state;

    return (
      <div>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <Grid
            component="ul"
            columns={null}
            columnWidth={300}
            gutterWidth={5}
            gutterHeight={5}
            itemHeight={200}
            layout={layout.simple}
            springConfig={{ stiffness: 170, damping: 26 }}
          >
            {items}
          </Grid>
        }
      </div>
      );
  }
}

CatalogListCutter.propTypes = {
  fetching: PropTypes.bool,
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
