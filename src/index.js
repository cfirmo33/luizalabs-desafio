import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import HomePage from './components/pages/HomePage'
import FavoritesPage from './components/pages/FavoritesPage'

import registerServiceWorker from './registerServiceWorker'

import { HashRouter, Route, Switch } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/createStore'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
