import * as React from 'react'
import { Trigger, Icon, Bar, Sidebar, RouteContainer, RouteButton } from '../styled/Menu'

type State = {
    opened: boolean,
}

type Props = {
    routes: [],
    push: (route: string) => void,
};

export default class MenuMobile extends React.Component<Props, State> {
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
