import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ children }) => (
  <div className="lista-de-personagens">
    {children}
  </div>
)
Grid.propTypes = {
  children: PropTypes.array.isRequired,
}
export default Grid
