import app from 'styles/views/App'

import React, { Component, PropTypes } from 'react'
import Footer from 'components/App/Footer'
import Modernizr from 'modernizr'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class Home extends Component {

  state = {
    facebook: '',
  }

  componentDidMount() {
    this.addEvent(window, 'message', (event) => {
      this.receiveData(event.data)
    })
  }

  componentWillUnmount() {
    this.removeEvent(window, 'message', (event) => {
      this.receiveData(event.data)
    })
  }

  addEvent = (obj, evt, func) => {
    return Modernizr.eventlistener ? obj.addEventListener(evt, func, false) : obj.attachEvent(`on${evt}`, func)
  }

  removeEvent = (obj, evt, func) => {
    return Modernizr.eventlistener ? obj.removeEventListener(evt, func, false) : obj.detachEvent(`on${evt}`, func)
  }

  pushAbout = () => {
    const { dispatch } = this.props
    dispatch(push('/about'))
  }

  loginFB = (event, size = { width: 500, height: 475 }) => {
    let checkCookie
    const url = 'https://indio.com.mx/agegate/socialLogin/socialLoginCallback.php?socialNetwork=FB'
    window.open(url, 'Login', `width=${size.width}, height=${size.height}, scrollbars=yes`)
    if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))) {
      if (checkCookie) clearInterval(checkCookie)
      checkCookie = setInterval(() => {
        const cookie = this.readCookie()
        if (cookie) {
          clearInterval(checkCookie)
          this.receiveData(cookie)
        }
      }, 100)
    }
  }

  receiveData = (data) => {
    const facebook = JSON.parse(data)
    console.info('Facebook', facebook)
    this.setState({ facebook })
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
      <div className={app.container}>
        <h1>Home</h1>
        <p>This is a static page</p>
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
