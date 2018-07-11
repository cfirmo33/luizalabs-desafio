import {
  FETCH_ALL_CHARACTERS,
  FETCH_ALL_FAVORITES,
  PRE_SEARCH,
  FETCH_CHARACTER,
  NEW_NOTIFICATION,
  FETCH_GENERIC_LIST,
} from './types'

const INITIAL_STATE = {
  list: {
    data: {
      total: 0,
      limit: 0,
      count: 0,
      results: [],
    },
  },
  item: {},
  favorites: [],
  isPresearch: undefined,
  notification: undefined,
  genericList: {
    total: 0,
    limit: 0,
    count: 0,
    results: [],
  },
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS:
      return {
        ...state,
        list: action.payload,
      }
    case FETCH_CHARACTER:
      return {
        ...state,
        item: action.payload.data.results[0],
      }
    case FETCH_ALL_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      }
    case PRE_SEARCH:
      return {
        ...state,
        isPresearch: action.payload,
      }
    case NEW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      }
    case FETCH_GENERIC_LIST:
      return {
        ...state,
        genericList: action.payload,
      }
    default:
      return state
  }
}

export default {
  reducer,
}
