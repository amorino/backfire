import { put, call, fork } from 'redux-saga/effects';
import * as actions from 'actions/catalog';
import { takeEvery } from 'redux-saga';
import api from 'services';

export function* getAllItems() {
  // const items = yield call(fetchPostsApi);
  yield put(actions.requestItems());
  const items = yield call(api.getItems);
  yield put(actions.receiveItems(items));
}

export function* watchGetCatalog() {
  yield* takeEvery(actions.GET_ALL_ITEMS, getAllItems);
}

export default function* root() {
  yield [
    fork(getAllItems),
    fork(watchGetCatalog),
  ];
}
