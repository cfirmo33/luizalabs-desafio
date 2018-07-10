import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import { reducer as characterReducer } from './character/reducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  characters: characterReducer,
  toastr: toastrReducer,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, thunk, multi)(createStore)(rootReducer, devTools)

export default store
