export function fontFace({ fontFamily, fontFilePath, fontWeight = 'normal', fontStyle = 'normal' }) {
  return `
      @font-face{
          font-family: "${fontFamily}";
          src: url(${import(`../../assets/fonts/${fontFilePath}.eot`)});
          src: url(${import(`../../assets/fonts/${fontFilePath}.eot`)}?#iefix) format("embedded-opentype"),
                url(${import(`../../assets/fonts/${fontFilePath}.woff`)}) format("woff"),
                url(${import(`../../assets/fonts/${fontFilePath}.ttf`)}) format("truetype"),
                url(${import(`../../assets/fonts/${fontFilePath}.svg`)}#${fontFamily}) format("svg");

          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `
}

export default fontFace
