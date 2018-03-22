// @flow

type Font = {
  fontFamily: string,
  fontFilePath: string,
  fontWeight?: string,
  fontStyle?: string,
}

export function fontFace({
  fontFamily,
  fontFilePath,
  fontWeight = 'normal',
  fontStyle = 'normal',
}: Font) {
  const eot = require(`../../assets/fonts/${fontFilePath}.eot`)
  const woff = require(`../../assets/fonts/${fontFilePath}.woff`)
  const ttf = require(`../../assets/fonts/${fontFilePath}.ttf`)
  const svg = require(`../../assets/fonts/${fontFilePath}.svg`)
  return `
      @font-face{
          font-family: "${fontFamily}";
          src: url(${eot});
          src: url(${eot}?#iefix) format("embedded-opentype"),
                url(${woff}) format("woff"),
                url(${ttf}) format("truetype"),
                url(${svg}#${fontFamily}) format("svg");

          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `
}

export default fontFace
