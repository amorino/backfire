/* eslint-disable */

import {put, call, fork} from 'redux-saga/effects';
import * as actions from '../actions';
import {takeEvery} from 'redux-saga';
import {api} from '../services';

function fetchPostsApi() {
  return fetch(`https://kokonutstudio.com/catalog.json`).then(response => response.json())
}

export function * getAllItems() {
  // const items = yield call(fetchPostsApi);
  const items = yield call(api.getItems);
  yield put(actions.receiveItems(items));
}

export function * watchGetProducts(getState) {
  /*
    takeEvery will fork a new `checkout` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield * takeEvery(actions.GET_ALL_ITEMS, getState);
}

export default function * root(getState) {
  yield[
    fork(getAllItems),
    fork(watchGetProducts, getState)
  ];
}
