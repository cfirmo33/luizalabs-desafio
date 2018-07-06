import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const MenuItem = ({ title, icon, active }) => (
  <li>
    <a href=":;" className={classnames({ active })}>
      <i className={icon} />
      <span>
        {title}
      </span>
    </a>
  </li>
)

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  active: false,
}

export default MenuItem
