import { fork } from 'redux-saga/effects'
import { watchGetCatalog } from './containers/Catalog/saga'

export default function* root() {
  yield [
    fork(watchGetCatalog),
  ]
}
