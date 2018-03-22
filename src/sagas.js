// @flow
import type { Saga } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { watchGetCatalog } from './containers/Catalog/saga'

export default function* root() : Saga<void> {
  yield [
    fork(watchGetCatalog),
  ]
}
