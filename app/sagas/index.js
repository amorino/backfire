// import {getGithubData} from './getGithubData.saga';
//
// export default[getGithubData];

/* eslint-disable no-constant-condition */

import {take, put, call, fork} from 'redux-saga/effects';
import * as actions from '../actions';
import {api} from '../services';

export function * getAllItems() {
  while (yield take(actions.GET_ALL_ITEMS)) {
    const items = yield call(api.getItems);
    yield put(actions.receiveItems(items));
  }
}

export function * startup() {
  yield put(actions.getAllItems());
}

export default function * root() {
  yield fork(getAllItems);
  yield fork(startup);
}
