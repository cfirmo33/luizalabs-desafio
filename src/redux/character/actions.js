import axios from 'axios'
import { api } from '../../helpers/marvelApi'
import addParam from 'append-query'
import store from 'store'
import { toastr } from 'react-redux-toastr'
import {
  FETCH_ALL_CHARACTERS,
  FETCH_ALL_FAVORITES,
  LOADING_CHARACTERS,
  PRE_SEARCH,
  FETCH_CHARACTER,
  NEW_NOTIFICATION,
  FETCH_GENERIC_LIST,
} from './types'

export const preLoading = () => ({ type: LOADING_CHARACTERS })

export const fetchCharacters = (page = 0, search = undefined, limit = 40) => (dispatch) => {
  const url = addParam(api('/public/characters'), { nameStartsWith: search, limit, offset: limit * page }, { removeNull: true })

  axios.get(url)
    .then((response) => {
      const result = response.data
      result.page = page
      result.search = search

      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: result,
      })
    })
}


export const sendNotify = (notify = undefined) => ({
  type: NEW_NOTIFICATION,
  payload: notify,
})

export const fetchCharacter = id => (dispatch) => {
  const url = api(`/public/characters/${id}`)
  axios.get(url)
    .then((response) => {
      dispatch([
        {
          type: FETCH_CHARACTER,
          payload: response.data,
        },
        sendNotify(),
      ])
    })
}


const fetchGeneric = type => (id, page = 0, limit = 40) => (dispatch) => {
  let url = api(`/public/characters/${id}/${type}`)
  url = addParam(url, {
    limit,
    offset: limit * page,
  })
  axios.get(url)
    .then((response) => {
      dispatch([
        sendNotify(),
        {
          type: FETCH_GENERIC_LIST,
          payload: response.data.data,
        },
      ])
    })
}

export const fetchComics = fetchGeneric('comics')
export const fetchSeries = fetchGeneric('series')
export const fetchEvents = fetchGeneric('events')


export const getFavorites = () => ({
  type: FETCH_ALL_FAVORITES,
  payload: store.get('favorites') || [],
})

export const preSearch = (status = true) => ({
  type: PRE_SEARCH,
  payload: status,
})

export const setFavorite = (character) => {
  let favorites = store.get('favorites') || []
  let favoriteExists = false
  favorites = favorites.filter((item) => {
    const result = item.id === character.id
    if (result) {
      favoriteExists = true
    }
    return !result
  })
  if (!favoriteExists) {
    favorites.push(character)
    toastr.success('Favoritos', `${character.name} foi adicionado como favorito!`)
  } else {
    toastr.info('Favoritos', `${character.name} foi removido dos favoritos`)
  }

  store.set('favorites', favorites)
  return [
    {
      type: 'SET_FAVORITE',
    },
    getFavorites(),
  ]
}

export default {
  fetchCharacters,
  getFavorites,
  setFavorite,
}
