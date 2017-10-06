import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { catalog, filter } from './containers/Catalog/reducer'
import app from './containers/App/reducer'

export default function createReducer() {
  return combineReducers({ routing, catalog, filter, app })
}
