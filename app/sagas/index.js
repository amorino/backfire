/* eslint-disable */

import {put, call, fork} from 'redux-saga/effects';
import * as actions from '../actions';
import {takeEvery} from 'redux-saga';
import {api} from '../services';

export function * getAllItems() {
  // const items = yield call(fetchPostsApi);
  yield put(actions.requestItems(items));
  const items = yield call(api.getItems);
  yield put(actions.receiveItems(items));
}

export function * watchGetCatalog(getState) {
  yield * takeEvery(actions.GET_ALL_ITEMS, getState);
}

export default function* root(getState) {
  yield[
    fork(getAllItems),
    fork(watchGetCatalog, getState)
  ];
}
