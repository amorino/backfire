import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import catalog from 'assets/json/catalog.json'

import request from '../../utils/request'
import { requestItems, receiveItems, GET_ALL_ITEMS } from './actions'

export function* getCatalog() {
  yield put(requestItems())
  const items = yield call(request, catalog)
  if (!items.err) {
    yield put(receiveItems(items.data))
  } else {
    console.error(items.err)
  }
}

export function* watchGetCatalog() {
  yield* takeEvery(GET_ALL_ITEMS, getCatalog)
}
