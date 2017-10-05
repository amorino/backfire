import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from 'styles/views/Catalog'
import gsap from 'react-gsap-enhancer'
import { appearAnim, leaveAnim } from 'animations/catalog'

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number,
    }).isRequired,
  }

  componentWillAppear(callback) {
    this.addAnimation(appearAnim, { callback })
  }

  componentWillEnter(callback) {
    this.addAnimation(appearAnim, { callback })
  }

  componentWillLeave(callback) {
    this.addAnimation(leaveAnim, { callback })
  }

  render() {
    const { description, title, id } = this.props.item
    return (
      <div className={styles.item}>
        <span>{title}</span> - <span>{description}</span> - <Link to={`catalog/${id}`}>{'Go'}</Link>
      </div>
    )
  }
}

export default gsap()(Item)
