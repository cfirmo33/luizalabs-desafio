import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem'

const Menu = ({ children }) => (
  <nav>
    <ul>
      {children}
    </ul>
  </nav>
)

Menu.propTypes = {
  children: PropTypes.arrayOf(MenuItem).isRequired,
}

export default Menu
