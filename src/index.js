import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/main.css'
import HomePage from './components/pages/HomePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={null}>
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
