import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const Menu = ({ current, routes, push }) => {
  const linkProps = { current, push }
  return (
    <div className="Menu-Desktop">
      <div className="Menu-Desktop_Container">{routes.map(item => <Link {...item} {...linkProps} key={item.text} />)}</div>
    </div>
  )
}

Menu.propTypes = {
  current: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
}

export default (Menu)
