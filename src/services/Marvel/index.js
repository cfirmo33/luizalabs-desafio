import api from './api'

export const getList = (
  page = 0,
  nameStartsWith = null,
  limit = 40
) => (
  api.get('/public/characters', {
    limit,
    nameStartsWith,
    offset: page * limit,
  })
)

export const getItem = id => api.get(`/public/characters/${id}`)
export const getDetailList = type => (id, page = 0, limit = 40) => api.get(`/public/characters/${id}/${type}`, {
  limit,
  offset: page * limit,
})
