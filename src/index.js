import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import HomePage from './components/pages/HomePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HomePage />, document.getElementById('root'))
registerServiceWorker()
