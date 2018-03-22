// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Card from './components/Card'
import { RouterWrapper } from '../App/styled'

type Props = {
  id: string
}

class Detail extends React.Component<Props> {
  render() {
    const { id } = this.props
    return (
      <RouterWrapper>
        <Card id={id} />
      </RouterWrapper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

export default connect(mapStateToProps)(Detail)
