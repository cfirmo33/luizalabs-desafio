import PropTypes from 'prop-types'

const If = ({ test, children }) => {
  if (test) {
    return children
  }
  return false
}

If.propTypes = {
  test: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  children: PropTypes.any.isRequired,
}

If.defaultTypes = {
  test: false,
}

export default If
