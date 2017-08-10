import 'babel-polyfill'

import { render } from 'react-dom'
import React from 'react'
import Framework from 'server-framework'

import 'styles/base'
import 'sanitize.css/sanitize.css'

render((<Framework />), document.getElementById('root'))
