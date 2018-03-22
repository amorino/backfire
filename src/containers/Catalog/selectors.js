// @flow
import { createSelector } from 'reselect'
import type { State } from './types'

export const getVisibilityFilter = (state: State) => state.filter
export const getItem = (state: State, id: number) => state.catalog.items[id]
export const getCatalog = (state: State) => state.catalog.ids.map(id => getItem(state, id))

export const getFilteredCatalog = createSelector(
  [getVisibilityFilter, getCatalog],
  (visibilityFilter, catalog) => {
    switch (visibilityFilter) {
      case 'art':
        return catalog.filter(z => z.type === 'art')
      case 'music':
        return catalog.filter(z => z.type === 'music')
      default:
        return catalog
    }
  },
)
