// import {getGithubData} from './getGithubData.saga';
//
// export default[getGithubData];

/* eslint-disable no-constant-condition */

import {put, call, fork} from 'redux-saga/effects';
import * as actions from '../actions';
import {takeEvery} from 'redux-saga';
import {api} from '../services';

export function * getAllItems() {
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
  yield[fork(getAllItems),
    fork(watchGetProducts, getState)
  ];
}
