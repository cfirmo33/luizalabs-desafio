import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from './actionTypes'

const INITIAL_STATE = Immutable({
  message: null,
})

const sendNotification = (state, action) => ({
  ...state,
  message: action.payload,
})

const clearNotification = state => ({
  ...state,
  message: null,
})

export default createReducer(INITIAL_STATE, {
  [Types.SEND_NOTIFICATION]: sendNotification,
  [Types.CLEAR_NOTIFICATION]: clearNotification,
})
