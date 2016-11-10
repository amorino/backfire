import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getItem } from 'reducers/catalog'
import Image from 'components/utils/Image'
import styles from 'styles/views/CatalogItem'

class Detail extends Component {
  render() {
    const { fetching, item } = this.props
    return (
      <div>
        {fetching && <h2>Loading...</h2>}
        {!fetching &&
          <div>
            <h3>Item</h3>
            {item.title} - {item.description} - <Link to={'/catalog'}>Return</Link>
            <div className={styles.imageContainer}>
              <Image src={item.image} />
            </div>
          </div>
        }
      </div>
    )
  }
}

Detail.propTypes = {
  fetching: PropTypes.bool,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

function mapStateToProps(state, props) {
  return {
    fetching: state.catalog.catalogItems.fetching,
    item: getItem(state.catalog, props.id),
  }
}

export default connect(mapStateToProps)(Detail)
