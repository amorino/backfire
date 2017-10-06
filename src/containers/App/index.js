import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { addEvent, removeEvent } from '../../utils/events'
import { resize } from './actions'
import { getAllItems } from '../Catalog/actions'

import Menu from '../../components/Menu'

import Home from '../Home'
import About from '../About'
import Catalog from '../Catalog'
import Detail from '../Detail'
import NotFound from '../NotFound'

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    resize: PropTypes.func.isRequired,
    getAllItems: PropTypes.func.isRequired,
  }

  componentDidMount() {
    addEvent(window, 'resize', this.handleResize)
    this.props.getAllItems()
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.handleResize)
  }

  handleResize = () => {
    this.props.resize(window.innerWidth, window.innerHeight)
  }

  render() {
    const { location } = this.props
    return (
      <div id="app">
        <Menu current={location.pathname} />
        <div className="app_router">
          <div className="app__wrapper">
            <Switch key={location.key} location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/catalog/:id" component={Detail} />
              <Route path="/catalog" component={Catalog} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  index: state.app.index,
  location: state.routing.location,
})

export default connect(mapStateToProps, { resize, getAllItems })(App)
