import { createReducer } from 'reduxsauce'
import Types from './actionTypes'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  fetching: false,
  character: {},
  list: {
    total: 0,
    count: 0,
    limit: 0,
    page: 0,
    offset: 0,
    search: null,
    results: [],
  },
  details: {
    total: 0,
    count: 0,
    limit: 0,
    offset: 0,
    fetching: false,
    results: [],
  },
})

const requestCharacterItem = state => ({
  ...state,
  fetching: true,
})

const successCharacterItem = (state, action) => ({
  ...state,
  fetching: false,
  character: action.payload.data.results[0],
})

const requestCharacterList = state => ({
  ...state,
  fetching: true,
})

const successCharacterList = (state, { payload: { data } }) => ({
  ...state,
  fetching: false,
  list: data,
})


const requestCharacteDetail = state => ({
  ...state,
})

const successCharacterDetail = (state, { payload: { data } }) => ({
  ...state,
  details: data,
})

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_CHARACTER_ITEM]: requestCharacterItem,
  [Types.SUCCESS_CHARACTER_ITEM]: successCharacterItem,

  [Types.REQUEST_CHARACTER_LIST]: requestCharacterList,
  [Types.SUCCESS_CHARACTER_LIST]: successCharacterList,

  [Types.REQUEST_CHARACTER_DETAIL]: requestCharacteDetail,
  [Types.SUCCESS_CHARACTER_DETAIL]: successCharacterDetail,
})
