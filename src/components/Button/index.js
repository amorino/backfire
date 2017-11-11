import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import StyledButton from './StyledButton'

const Button = (props) => {
  if (props.handleRoute) {
    return (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    )
  }
  return (
    <A href={props.href} onClick={props.onClick}>
        {Children.toArray(props.children)}
    </A>
  )
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
