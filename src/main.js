import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Framework from 'framework'
import preloader from 'preloader'
import { TweenMax } from 'gsap' // eslint-disable-line

import 'file?name=[name].[ext]!./.htaccess'
import 'sanitize.css/sanitize.css'
import 'styles/base'

// import data from 'assets/json/data.json'
import Modernizr from 'modernizr'

console.info(Modernizr)

const preload = preloader({
  xhrImages: true,
  loadFullAudio: true,
  loadFullVideo: true,
})

preload.on('progress', (progress) => {
  console.log(progress)
})

preload.on('complete', () => {
  render(<Framework />, document.getElementById('root'))
})

preload.load()
