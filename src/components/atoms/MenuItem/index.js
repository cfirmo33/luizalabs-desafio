import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import If from '../If'

const MenuItem = ({ title, active, number }) => (
  <li>
    <a href=":;" className={classnames({ active })}>
      {title}
      <If test={number}>
        <small>{number}</small>
      </If>
    </a>
  </li>
)

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  number: PropTypes.number,
}

MenuItem.defaultProps = {
  active: false,
}

export default MenuItem
