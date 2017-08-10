import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Framework from 'framework'
import preloader from 'preloader'
import { TweenMax } from 'gsap'  // eslint-disable-line

import 'file-loader?name=[name].[ext]!./.htaccess' // eslint-disable-line
import 'sanitize.css/sanitize.css'
import 'styles/base'

import Modernizr from 'modernizr'
import { config } from 'config'

console.info(Modernizr)
window.Modernizr = Modernizr

const ready = () => {
  TweenMax.to('#root__loader', 1.3, {
    autoAlpha: 0,
    delay: 1.75,
    ease: Quint.easeOut,
    onComplete: () => render(<Framework />, document.getElementById('root')),
  })
}

if (config.assets) {
  console.info('Load Assets')
  const preload = preloader({ xhrImages: true, loadFullAudio: true, loadFullVideo: true })

  preload.on('progress', (progress) => {
    console.log(progress)
  })

  preload.on('complete', () => {
    console.info('Assets Loaded')
    ready()
  })

  preload.load()
} else {
  console.warn('Do Not Load Assets')
  ready()
}
