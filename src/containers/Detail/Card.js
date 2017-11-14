import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Img from 'components/Img'
import { H1 } from 'components/Typography'
import { getItem } from '../Catalog/selectors'
import Container from './components/Container'

class Detail extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  }

  static defaultProps = {
    item: {
      title: '',
      description: '',
      image: '',
      id: 0,
    },
  };

  render() {
    const { fetching, item } = this.props
    return (
      <Container>
        {fetching && <h2>Loading...</h2>}
        {!fetching &&
          <div>
            <H1>Item</H1>
            <span>{item.title} - {item.description} - <Link to={'/catalog'}>Return</Link></span>
            <Img src={item.image} />
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  fetching: state.catalog.fetching,
  item: getItem(state, props.id),
})

export default connect(mapStateToProps)(Detail)
