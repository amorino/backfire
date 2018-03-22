import React from 'react'
import { NormalButton, MenuDesktop } from '../styled/Menu'

type Props = {
  current: String,
  routes: [],
  push: (route: String) => void,
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
