// @flow
import type { Saga } from 'redux-saga'
import { fork, all } from 'redux-saga/effects'
import { watchGetCatalog } from './containers/Catalog/saga'

export default function* root() : Saga<void> {
  yield all([
    fork(watchGetCatalog),
  ])
}
