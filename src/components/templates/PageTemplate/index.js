import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import PropTypes from 'prop-types'
import Header from '../../Layout/Header'

const PageTemplate = ({ children }) => (
  <div className="container">
    <Header />
    <main>
      {children}
    </main>
    <ReduxToastr
      timeOut={3500}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
    />
  </div>
)
PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}
export default PageTemplate
