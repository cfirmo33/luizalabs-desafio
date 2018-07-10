import { combineReducers } from 'redux'
import characterReducer from './character/reducer'

const rootReducer = combineReducers({
  characters: characterReducer,
})

export default rootReducer
