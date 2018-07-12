import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from './actionTypes'

const INITIAL_STATE = Immutable({
  list: [],
  listFetching: false,
  setFetching: false,
})

const listRequest = state => ({
  ...state,
  listFetching: true,
})

const listSuccess = (state, action) => ({
  ...state,
  listFetching: false,
  list: action.payload,
})

const setRequest = state => ({
  ...state,
  setFetching: true,
})

const setSuccess = state => ({
  ...state,
  setFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.FAVORITE_LIST_REQUEST]: listRequest,
  [Types.FAVORITE_LIST_SUCCESS]: listSuccess,
  [Types.FAVORITE_SET_REQUEST]: setRequest,
  [Types.FAVORITE_SET_SUCCESS]: setSuccess,
})
