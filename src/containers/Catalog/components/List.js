import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion'
import { getFilteredCatalog } from '../selectors'

class CatalogList extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    catalog: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired,
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
    return catalog.map(item => ({
      data: item,
      key: item.id.toString(),
      style: {
        width: spring(200),
        height: spring(200),
        opacity: spring(1),
      },
    }))
  }

  willEnter = () => ({
    width: 0,
    height: 0,
    opacity: 1,
  })

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
      <div className="ListComponent">
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
          >
            {interpolatedStyles =>
              (<div>
                {interpolatedStyles.map((config) => {
                  return (
                    <div
                      key={config.key}
                      style={{ ...config.style, border: '1px solid' }}
                    >
                      {config.data.title} - {config.data.description} - <Link to={`/catalog/${config.data.id}`}>Go</Link>
                    </div>
                  )
                })}
              </div>)
            }
          </TransitionMotion>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  catalog: getFilteredCatalog(state),
  fetching: state.catalog.fetching,
})

export default connect(mapStateToProps)(CatalogList)
