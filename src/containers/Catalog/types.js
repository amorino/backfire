// @flow

export type Item = {
  id: number,
  type: string,
  title: string,
  description: string,
  image: string
}

export type CatalogState = {
  fetching: boolean,
  items: Array<Item>,
  ids: Array<number>
};

export type FilterState = string

export type State = {
  catalog: CatalogState,
  filter: FilterState,
}
