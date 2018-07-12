import Types from './actionTypes'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { getList, getItem, getDetailList } from '../../services/Marvel'
import { clearNotification } from '../notification/actions'

function* getCharacterList (action) {
  const { page, search, limit } = action.payload
  const response = yield call(getList, page, search, limit)
  const result = response.data
  result.data.page = page
  result.data.search = search

  yield put(clearNotification())
  yield put({
    type: Types.SUCCESS_CHARACTER_LIST,
    payload: result,
  })
}

function* getCharacter (action) {
  const response = yield call(getItem, action.payload.characterId)
  yield put({
    type: Types.SUCCESS_CHARACTER_ITEM,
    payload: response.data,
  })
}

function* getCharacterDetailList (action) {
  const { characterId, page, limit } = action.payload
  const response = yield call(getDetailList(action.payload.type), characterId, page, limit)
  yield put(clearNotification())
  yield put({
    type: Types.SUCCESS_CHARACTER_DETAIL,
    payload: response.data,
  })
}

export default function* root () {
  yield all([
    takeLatest(Types.REQUEST_CHARACTER_LIST, getCharacterList),
    takeLatest(Types.REQUEST_CHARACTER_ITEM, getCharacter),
    takeLatest(Types.REQUEST_CHARACTER_DETAIL, getCharacterDetailList),

  ])
}
