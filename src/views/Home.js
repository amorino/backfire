import app from 'styles/views/App'

import React, { Component, PropTypes } from 'react'
import Footer from 'components/App/Footer'
import { addEvent, removeEvent } from 'utils/events'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import isPlainObject from 'lodash/isPlainObject'

class Home extends Component {

  state = {
    facebook: '',
  }

  componentDidMount() {
    addEvent(window, 'message', this.receiveData)
  }

  componentWillUnmount() {
    removeEvent(window, 'message', this.receiveData)
    this.checkCookie && clearInterval(this.checkCookie)
    this.checkCookie = false
  }

  pushAbout = () => {
    const { dispatch } = this.props
    dispatch(push('/about'))
  }

  loginFB = (event, size = { width: 500, height: 475 }) => {
    const url = 'https://indio.com.mx/agegate/socialLogin/socialLoginCallback.php?socialNetwork=FB'
    window.open(url, 'Login', `width=${size.width}, height=${size.height}, scrollbars=yes`)
    if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))) {
      if (this.checkCookie) clearInterval(this.checkCookie)
      this.checkCookie = setInterval(() => {
        const cookie = this.readCookie()
        if (cookie) {
          clearInterval(this.checkCookie)
          this.receiveData(cookie)
        }
      }, 100)
    }
  }

  receiveData = (event) => {
    if (!isPlainObject(event.data)) {
      const facebook = JSON.parse(event.data)
      console.info('Facebook', facebook)
      if (this.state.facebook !== facebook) this.setState({ facebook })
    }
  }

  readCookie = () => {
    if (document.cookie) {
      const cookies = document.cookie.split(';')
      for (let i = 0; cookies.length; i + 1) {
        const cookie = cookies[i].split('=')
        if (cookie[0] === 'user') {
          const value = cookie[1]
          document.cookie = `user=;path=/;expires=${new Date(Date.now() - 1000).toGMTString()}`
          return value
        }
      }
    }
    return undefined
  }

  render() {
    const { facebook } = this.state
    return (
      <div className={app.container} ref={node => this.node = node}>
        <h2>Welcome to Backfire</h2>
        <p>This is a static page.</p>
        <p>{facebook && facebook.user.name}</p>
        <button onClick={this.loginFB}>Login</button>
        <button onClick={this.pushAbout}>About</button>
        <Footer />
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Home)
