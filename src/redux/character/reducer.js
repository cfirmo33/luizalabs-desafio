import { FETCH_ALL_CHARACTERS, FETCH_ALL_FAVORITES, LOADING_CHARACTERS } from './types'

const INITIAL_STATE = {
  list: {
    total: 0,
    limit: 0,
    count: 0,
    results: [],
  },
  favorites: [],
  loading: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS:
      return {
        ...state,
        list: action.payload.data,
        loading: false,
      }
    case FETCH_ALL_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      }
    case LOADING_CHARACTERS:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
