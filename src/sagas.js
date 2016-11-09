import { put, call, fork } from 'redux-saga/effects'
import { requestItems, receiveItems, GET_ALL_ITEMS } from 'actions/catalog'
import { takeEvery } from 'redux-saga'
import request from 'utils/request'
import catalog from 'assets/json/catalog.json'

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

export default function* root() {
  yield [
    fork(getCatalog),
    fork(watchGetCatalog),
  ]
}
