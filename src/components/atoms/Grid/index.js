import React from 'react'
import PropTypes from 'prop-types'
import CharacterItem from '../../molecules/CharacterItem'

const Grid = ({ children }) => (
  <div className="lista-de-personagens">
    {children}
  </div>
)
Grid.propTypes = {
  children: PropTypes.arrayOf(CharacterItem).isRequired,
}
export default Grid
