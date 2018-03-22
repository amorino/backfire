// @flow

import type { FilterAction, CatalogAction } from './actions'
import type { CatalogState, FilterState } from './types'

const initialState = {
  fetching: true,
  items: [],
  ids: [],
}

export const catalog = (state: CatalogState = initialState, action: CatalogAction) => {
  switch (action.type) {
    case 'REQUEST_ITEMS':
      return { ...state, fetching: true }
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        fetching: false,
        items: action.payload.reduce((obj, item) => {
          const result = obj
          result[item.id] = item
          return result
        }, {}),
        ids: action.payload.map(item => item.id),
      }
    default:
      return state
  }
}


export const filter = (state: FilterState = 'all', { payload, type }: FilterAction) => {
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return payload
    default:
      return state
  }
}

