import { fork } from 'redux-saga/effects'
import { watchGetCatalog } from './containers/Catalog/sagas'

export default function* root() {
  yield [
    fork(watchGetCatalog),
  ]
}
