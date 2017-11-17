import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './components'

const Menu = ({ current, routes, push }) => {
  return (
    <div>
      {routes.map(({ text, link }) => <Button fontSize={[2, 3, 4]} active={current === link} key={text} onClick={() => push(link)} >{text}</Button>)}
    </div>
  )
}

Menu.propTypes = {
  current: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
}

export default Menu
