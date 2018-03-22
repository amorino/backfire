import type { Saga } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import catalog from 'assets/json/catalog.json'

import request from '../../utils/request'
import { requestItems, receiveItems } from './actions'

export function* getCatalog(): Saga<void> {
  yield put(requestItems())
  const items = yield call(request, catalog)
  if (!items.err) {
    yield put(receiveItems(items.data))
  } else {
    console.error(items.err)
  }
}

export function* watchGetCatalog(): Saga<void> {
  yield* takeLatest('GET_ALL_ITEMS', getCatalog)
}
