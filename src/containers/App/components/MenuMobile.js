// @flow
import * as React from 'react'
import { Trigger, Icon, Bar, Sidebar, RouteContainer, RouteButton } from '../styled/Menu'
import type { Route } from '../types'

type State = {
    opened: boolean,
}

type Props = {
    routes: Array<Route>,
    push: (route: string) => void,
};

export default class MenuMobile extends React.PureComponent<Props, State> {
  state = {
    opened: false,
  }

  handleClick = (route: Route) => {
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
