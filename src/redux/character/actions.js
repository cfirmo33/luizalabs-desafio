import axios from 'axios'
import { FETCH_ALL_CHARACTERS, FETCH_ALL_FAVORITES, LOADING_CHARACTERS } from './types'
import { api } from '../../helpers/marvelApi'
import addParam from 'append-query'
import store from 'store'
import { toastr } from 'react-redux-toastr'

export const toLoading = () => ({ type: LOADING_CHARACTERS })

export const getList = (page = 0, limit = 20) => (dispatch) => {
  let url = api('/public/characters')
  url = addParam(url, {
    limit,
    offset: limit * page,
  })
  axios.get(url).then((response) => {
    dispatch({
      type: FETCH_ALL_CHARACTERS,
      payload: response.data,
    })
  })
}


export const search = nameStartsWith => (dispatch) => {
  let url = api('/public/characters')
  url = addParam(url, { nameStartsWith })
  axios.get(url)
    .then((response) => {
      if (response.data.data.results.length === 0) {
        toastr.error('Aviso', `Nenhum personagem encontrado para a busca '${nameStartsWith}'`)
      }
      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: response.data,
      })
    })
}

export const getFavorites = () => ({
  type: FETCH_ALL_FAVORITES,
  payload: store.get('favorites') || [],
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
  getList,
  search,
  getFavorites,
  setFavorite,
}
