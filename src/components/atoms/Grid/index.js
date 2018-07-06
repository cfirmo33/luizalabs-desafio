import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ children }) => (
  <div className="lista-de-personagens">
    {children}
  </div>
)
Grid.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Grid
