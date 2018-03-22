// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Img from '../../../components/Img'
import { H1 } from '../../../components/Typography'
import { getItem } from '../../Catalog/selectors'
import { Container } from '../styled/Card'
import type { Item } from '../../Catalog/types'

type Props = {
  fetching: boolean,
  item: Item,
}

class Detail extends React.Component<Props> {
  render() {
    const { fetching, item } = this.props
    return (
      <Container>
        {fetching && <h2>Loading...</h2>}
        {!fetching &&
          <div>
            <H1>Item</H1>
            <span>{item.title} - {item.description} - <Link to="/catalog">Return</Link></span>
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
