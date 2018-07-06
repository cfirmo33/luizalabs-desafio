import React from 'react'
import Logo from '../../atoms/Logo'
import Menu from '../../atoms/Menu'
import MenuItem from '../../atoms/MenuItem'

const Sidebar = () => (
  <aside>
    <Logo />
    <Menu>
      <MenuItem title="Todos" icon="fas fa-th" active />
      <MenuItem title="Favoritos" icon="far fa-heart" />
    </Menu>
  </aside>
)

export default Sidebar
