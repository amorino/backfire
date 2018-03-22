// @flow
import preloader from 'preloader'
import catalog from '../../../assets/json/catalog.json'

export const assetsLoader = (setPercentage: (percentage: number) => void) => {
  const promise : Promise<void> = new Promise((resolve) => {
    const preload = preloader({
      xhrImages: true,
      loadFullAudio: true,
      loadFullVideo: true,
    })
    preload.on('progress', (progress: number) => {
      const percentage = Math.round(progress * 100)
      console.log(`Loading: ${percentage}`)
      setPercentage(percentage)
    })
    preload.on('complete', resolve)
    preload.add(catalog)
    preload.load()
  })
  return promise
}

export default assetsLoader
