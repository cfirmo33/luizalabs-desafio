import PropTypes from 'prop-types'

const If = ({ test, children }) => {
  if (test) {
    return children
  }
  return false
}


If.propTypes = {
  test: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

If.defaultTypes = {
  test: false,
}
export default If