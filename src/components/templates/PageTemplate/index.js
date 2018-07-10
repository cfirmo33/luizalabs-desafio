import React from 'react'
import MenuBar from '../../organisms/MenuBar'
import ReduxToastr from 'react-redux-toastr'

const PageTemplate = ({ children }) => (
  <div className="container">
    <MenuBar />
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

export default PageTemplate
