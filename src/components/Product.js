import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { description, title } = this.props
    return <div> {title} - {description} </div>
  }
}

Product.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
