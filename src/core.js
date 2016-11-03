// import {mainLoaderDisappear} from 'app/animations/loader'
import preloader from 'preloader'

export default class MainApp {
  constructor(config, environment, data = {}) {
    this.debug = environment.vars.debug
    this.config = config
    this.environment = environment
    this.data = data
    this.started = false
    this.loader = preloader({ xhrImages: false, loadFullAudio: true, loadFullVideo: true })
    window.App = this
  }

  init() {
    this.addListeners()
    if (this.config.asset_loading) {
      this.loader.on('progress', (progress) => {
        console.log(progress)
      })
      this.loader.on('complete', this.loaderComplete)
      this.loadAssets()
    } else {
      this.start()
    }
  }

  addListeners() {
    if (this.config.vars.resize) {
      window.addEventListener('resize', this.onResizeHandler)
    }
    if (this.config.vars.animate) {
      this.animate()
    }
  }

  onResizeHandler() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate()
    })
  }

  loadAssets() {
    this.data.global.map(item => this.loader.add(`/static/${item}`))
    this.loader.load()
  }

  start() {
    this.started = true
    // mainLoaderDisappear()
    this.render()
  }

  loaderComplete = () => {
    console.info('Content Loaded')
    this.start()
  }
}
