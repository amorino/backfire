// @flow
import * as React from 'react'
import { NormalButton, MenuDesktop } from '../styled/Menu'
import type { Route } from '../types'

type Props = {
  current: string,
  routes: Array<Route>,
  push: (route: string) => void,
}

const Menu = (props: Props) => {
  const { routes, current, push } = props
  return (
    <MenuDesktop>
      {routes.map(({ text, link }) => (
        <NormalButton
          fontSize={[2, 3, 4]}
          active={current === link}
          key={text}
          onClick={() => push(link)}
        >
          {text}
        </NormalButton>
      ))}
    </MenuDesktop>
  )
}

export default Menu
