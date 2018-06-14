// @flow
import * as React from 'react'

type State = {
    opacity: number,
    loaded: boolean,
}

type Props = {
    src: string,
    speed: number,
    style: Object,
    title: string,
    ease: string,
}

class Img extends React.PureComponent<Props, State> {
  static defaultProps = {
    speed: 1,
    style: {},
    title: 'Image',
    ease: 'ease-out',
  }

  state = {
    opacity: 0,
    loaded: false,
  }

  fadeIn = () => {
    this.setState({ opacity: 1, loaded: true })
  }

  render() {
    const { src, speed, title, ease } = this.props
    const { opacity, loaded } = this.state
    return (
      <img
        alt={loaded ? title : 'Loading'}
        style={{
          transition: `opacity ${speed}s ${ease}`,
          opacity,
        }}
        src={src}
        onLoad={this.fadeIn}
      />)
  }
}

export default Img
