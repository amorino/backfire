import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from 'framework'

import 'file?name=[name].[ext]!./.htaccess' // eslint-disable-line
import { TweenMax } from 'gsap' // eslint-disable-line

import 'sanitize.css/sanitize.css'
import 'styles/base'

render(<Root />, document.getElementById('root'))
