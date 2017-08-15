import 'styles/views/App'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Menu from 'components/App/Menu'
import { getAllItems } from 'actions/catalog'
import { Route, Switch } from 'react-router-dom'

import Home from 'views/Home'
import About from 'views/About'
import Catalog from 'views/Catalog'
import CatalogItem from 'views/CatalogItem'
import NotFound from 'views/NotFound'


class App extends Component {
  static propTypes = {
    getAllItems: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAllItems()
  }

  render() {
    return (
      <div id="app">
        <Menu />
        <div className="app_router">
          <div className="app__wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/catalog/:id" component={CatalogItem} />
              <Route path="/catalog" component={Catalog} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { getAllItems })(App)
