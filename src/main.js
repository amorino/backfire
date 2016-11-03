import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Framework from 'framework'
import catalog from 'assets/json/catalog.json'

import 'file?name=[name].[ext]!./.htaccess' // eslint-disable-line
import { TweenMax } from 'gsap' // eslint-disable-line

import 'sanitize.css/sanitize.css'
import 'styles/base'
import request from 'utils/request'

request(catalog)
.then(json => console.log(json.data))
.catch(error => console.log(error))

render(<Framework />, document.getElementById('root'))
