import React from 'react'
import MenuBar from '../../organisms/MenuBar'

const PageTemplate = ({ children }) => (
  <div className="container">
    <MenuBar />
    <main>
      {children}
    </main>
  </div>
)

export default PageTemplate
