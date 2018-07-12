import Types from './actionTypes'
import store from 'store'

export const listFavorites = () => ({
  type: Types.FAVORITE_LIST_SUCCESS,
  payload: store.get('favorites') || [],
})

export const setFavorite = (character) => {
  let favorites = store.get('favorites') || []
  let exists = false

  favorites = favorites.filter((item) => {
    const result = item.id === character.id
    if (result) { exists = true }
    return !result
  })

  if (exists === false) { favorites.push(character) }
  store.set('favorites', favorites)

  return [
    { type: Types.FAVORITE_SET_SUCCESS },
    listFavorites(),
  ]
}
