import { createSelector } from 'reselect'

export const getVisibilityFilter = state => state.filter
export const getItem = (state, id) => state.catalog.items[id]
export const getCatalog = state => state.catalog.ids.map(id => getItem(state, id))

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
