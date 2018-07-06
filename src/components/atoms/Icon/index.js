import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => (
  <i className={icon} />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Icon
