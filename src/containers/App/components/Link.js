import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ current, link, text, isExternal, push }) => {
  if (isExternal) {
    return <a className="Link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  }

  return (
    <button onClick={() => push(link)} className={classnames('Link', { Active: current === link })}>{text}</button>
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
