import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import multi from 'redux-multi'

import characterReducer from './character/reducer'
import favoriteReducer from './favorite/reducer'
import notificationReducer from './notification/reducer'

import { reducer as toastReducer } from 'react-redux-toastr'

import rootSaga from './character/sagas'


const rootReducer = combineReducers({
  character: characterReducer,
  favorite: favoriteReducer,
  toastr: toastReducer,
  notification: notificationReducer,
})
const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(sagaMiddleware, multi)(createStore)(rootReducer, devTools)
sagaMiddleware.run(rootSaga)

export default store
