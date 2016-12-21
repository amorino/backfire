import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Footer from 'components/App/Footer'
import Detail from 'components/CatalogItem/Detail'

class CatalogItem extends Component {

  static propTypes = {
    id: PropTypes.string,
  }

  render() {
    const { id } = this.props
    return (
      <div className="app__container">
        <h2>Detail</h2>
        <Detail id={id} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  id: props.params.id,
})

export default connect(mapStateToProps)(CatalogItem)
