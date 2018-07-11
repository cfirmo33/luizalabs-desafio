import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import If from '../../../Layout/Helper/If'
import { Link, withRouter } from 'react-router-dom'

const isActive = (match, to) => match.path === to

const Item = ({
  title,
  number,
  to,
  match,
}) => (
  <li>
    <Link to={to} className={classnames({ active: isActive(match, to) })}>
      {title}
      <If test={(number !== undefined && number > 0)}>
        <small>{number}</small>
      </If>
    </Link>
  </li>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number,
  to: PropTypes.string.isRequired,
  match: PropTypes.objectOf(Object).isRequired,
}

Item.defaultProps = {
  number: 0,
}

export default withRouter(Item)
