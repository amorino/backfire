import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from 'components/Button'

const Link = ({ current, link, text, isExternal, push }) => {
  if (isExternal) {
    return <Button className="Link" href={link} target="_blank" rel="noopener noreferrer">{text}</Button>
  }

  return (
    <Button onClick={() => push(link)} className={classnames('d', { Active: current === link })}>{text}</Button>
  )
}

Link.propTypes = {
  current: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  push: PropTypes.func.isRequired,
}

Link.defaultProps = {
  isExternal: false,
}

export default Link
