import preloader from 'preloader'
import catalog from '../../assets/json/catalog.json'

export const assetsLoader = (setPercentage) => {
  return new Promise((resolve) => {
    const preload = preloader({
      xhrImages: true,
      loadFullAudio: true,
      loadFullVideo: true,
    })
    preload.on('progress', (progress) => {
      const percentage = Math.round(progress * 100)
      console.log('Loading:', percentage)
      setPercentage(percentage)
    })
    preload.on('complete', resolve)
    preload.add(catalog)
    preload.load()
  })
}

export default assetsLoader
