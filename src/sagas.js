import { put, call, fork } from 'redux-saga/effects'
import * as actions from 'actions/catalog'
import { takeEvery } from 'redux-saga'
import request from 'utils/request'
import catalog from 'assets/json/catalog.json'

export function* getAllItems() {
  // const items = yield call(fetchPostsApi)
  yield put(actions.requestItems())
  const items = yield call(request, catalog)
  if (!items.err) {
    yield put(actions.receiveItems(items.data))
  } else {
    console.log(items.err)
  }
}

export function* watchGetCatalog() {
  yield* takeEvery(actions.GET_ALL_ITEMS, getAllItems)
}

export default function* root() {
  yield [
    fork(getAllItems),
    fork(watchGetCatalog),
  ]
}
