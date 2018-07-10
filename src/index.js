import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import HomePage from './components/pages/HomePage'
import FavoritesPage from './components/pages/FavoritesPage'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/createStore'
import ReduxToastr from 'react-redux-toastr'

ReactDOM.render(
  <Provider store={store}>
    <div>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search/:search" component={HomePage} />
          <Route path="/favorites" component={FavoritesPage} />

          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
          />
        </Switch>

      </HashRouter>


    </div>

  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
