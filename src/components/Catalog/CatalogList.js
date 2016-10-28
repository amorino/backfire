import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import Item from 'components/Catalog/Item'
// import ReactTransitionGroup from 'react-addons-transition-group'
import styles from 'styles/views/Catalog'
import { getItems } from 'reducers/catalog'
import { TransitionMotion, spring } from 'react-motion'

const getFilteredItems = (catalog, filter) => {
  switch (filter) {
    case 'all':
      return catalog
    case 'art':
      return catalog.filter(t => t.type === 'art')
    case 'music':
      return catalog.filter(t => t.type === 'music')
    default:
      return catalog
  }
}

class CatalogList extends Component {

  state = {
    transitionMode: 'simultaneous',
  };

  componentDidMount() {
  }

  getDefaultStyles = () => {
    const { catalog } = this.props
    return catalog.map(item => ({
      data: item,
      key: item.id.toString(),
      style: {
        width: 0,
        height: 0,
        opacity: 1,
      },
    }))
  }

  getStyles = () => {
    const { catalog } = this.props
    return catalog.map((item) => {
      return {
        data: item,
        key: item.id.toString(),
        style: {
          width: 200,
          height: 200,
          opacity: spring(1),
        },
      }
    })
  }

  willEnter = () => {
    return {
      width: 0,
      height: 0,
      opacity: 1,
    }
  }

  willLeave = () => {
    return {
      width: spring(0),
      height: spring(0),
      opacity: spring(0),
    }
  }

  render() {
    const { fetching } = this.props

    return (
      <div className={styles.list}>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
          >
            {interpolatedStyles =>
              <div>
                {interpolatedStyles.map((config) => {
                  return (
                    <div
                      key={config.key}
                      style={{ ...config.style, border: '1px solid' }}
                    >
                      {config.data.title} - {config.data.description} - <Link to={`catalog/${config.data.id}`}>Go</Link>
                    </div>
                  )
                })}
              </div>
            }
            </TransitionMotion>
        }
      </div>
      )
  }
}

CatalogList.propTypes = {
  fetching: PropTypes.bool,
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  catalog: getFilteredItems(getItems(state.catalog), state.filter),
  fetching: state.catalog.catalogItems.fetching,
})

export default connect(mapStateToProps)(CatalogList)
