import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Layout/Header'

const PageTemplate = ({ children }) => (
  <div className="container">
    <Header />
    <main>
      {children}
    </main>
  </div>
)
PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}
export default PageTemplate
