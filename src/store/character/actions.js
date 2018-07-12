import Types from './actionTypes'

export const requestList = (page = 0, search = null, limit = 40) => ({
  type: Types.REQUEST_CHARACTER_LIST,
  payload: {
    page,
    search,
    limit,
  },
})

export const requestItem = characterId => ({
  type: Types.REQUEST_CHARACTER_ITEM,
  payload: { characterId },
})

const genericRequestDetail = type => (characterId, page = 0, limit = 40) => ({
  type: Types.REQUEST_CHARACTER_DETAIL,
  payload: {
    type,
    characterId,
    page,
    limit,
  },
})
export const requestDetailComics = genericRequestDetail('comics')
export const requestDetailSeries = genericRequestDetail('series')
export const requestDetailEvents = genericRequestDetail('events')

