import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Trigger, Icon, Bar, Sidebar, RouteContainer, RouteButton } from './components/Menu'

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
      <div>
        <Trigger>
          <Icon onClick={() => this.setState({ opened: !opened })}>
            <Bar opened={opened} />
          </Icon>
        </Trigger>
        {opened &&
          <Sidebar>
            {
              routes.map((route) => {
                return (
                  <RouteContainer key={route.text}>
                    <RouteButton onClick={() => this.handleClick(route)}>{route.text}</RouteButton>
                  </RouteContainer>
                )
              })
            }
          </Sidebar>
        }
      </div>
    )
  }
}
