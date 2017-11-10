import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MenuMobile extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    push: PropTypes.func.isRequired,
  }

  state = {
    opened: false,
  }

  handleClick = (route) => {
    const { push } = this.props
    this.setState({ opened: false })
    push(route.link)
  }

  render() {
    const { routes } = this.props
    const { opened } = this.state
    return (
      <div className="Menu-Mobile">
        <div className="Menu-Mobile_Trigger">
          <button className="Menu-Mobile_Trigger_Icon" onClick={() => this.setState({ opened: !opened })}>
            <div className={`${opened ? 'Animate' : 'Inactive'} Menu-Mobile_Trigger_Icon_Bar`} />
          </button>
        </div>
        {opened && <div className="Menu-Mobile_Sidebar">
          {
            routes.map((route) => {
              return (
                <div key={route.link} className="Link">
                  <button onClick={() => this.handleClick(route)}>
                    {route.text}
                  </button>
                </div>
              )
            })
          }
        </div>}
      </div>
    )
  }
}
