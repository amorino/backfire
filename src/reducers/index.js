import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { catalog } from 'reducers/catalog'
import app from 'reducers/app'
import filter from 'reducers/visibility'

export default function createReducer() {
  return combineReducers({ routing, catalog, filter, app })
}
