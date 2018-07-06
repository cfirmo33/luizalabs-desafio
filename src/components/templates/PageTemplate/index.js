import React from 'react'
import Sidebar from '../../molecules/Sidebar'

const PageTemplate = ({ children }) => (
  <div className="container">
    <Sidebar />
    <main>
      {children}
    </main>
  </div>
)

export default PageTemplate
