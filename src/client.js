import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Framework from 'server-framework'
import { TweenMax } from 'gsap'  // eslint-disable-line

import 'sanitize.css/sanitize.css'
import 'styles/base'

import Modernizr from 'modernizr'

console.info(Modernizr)
window.Modernizr = Modernizr

render(<Framework />, document.getElementById('root'))
