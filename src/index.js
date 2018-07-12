
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import DetailsPage from './pages/DetailsPage'

import registerServiceWorker from './registerServiceWorker'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:search" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/detail/:id/:page" component={DetailsPage} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
