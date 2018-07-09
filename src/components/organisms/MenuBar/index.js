import React from 'react'
import Logo from '../../atoms/Logo'
import Menu from '../../atoms/Menu'
import MenuItem from '../../atoms/MenuItem'
import SearchBar from '../../molecules/SearchBar'

const MenuBar = () => (
  <div className="menu-bar">
    <div className="intent">
      <Logo />
      <Menu>
        <MenuItem title="Todos" icon="fas fa-th" active />
        <MenuItem title="Favoritos" icon="far fa-heart" number={1} />
      </Menu>
      <SearchBar />
    </div>
  </div>
)

export default MenuBar
