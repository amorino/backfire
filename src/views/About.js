import styles from 'styles/views/About'

import React, { Component } from 'react'
import Footer from 'components/App/Footer'
import Slider from 'react-motion-slider'

export default class About extends Component {

  state = {
    slides: [0, 1, 2, 3],
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <p>Static page.</p>
        <div className={styles.sliderWrapper}>
          <Slider
            ref={element => (this.slider = element)}
            currentKey="slide-3" // move to a specific slide by passing its key
            autoHeight={false} // animate slider wrapper
            slidesToShow={1}
          >
            {this.state.slides.map((slide, i) =>
              <div key={`slide-${i}`} className={`slide slide--${i + 1}`} />
            )}
          </Slider>
        </div>
        <Footer />
      </div>
    )
  }
}
