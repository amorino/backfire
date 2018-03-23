// @flow
import type { Item } from './types'

type ReceiveItemsAction = {
  type: 'RECEIVE_ITEMS',
  payload: Array<Item>,
}

type RequestItemsAction = {
  type: 'REQUEST_ITEMS',
  payload: Array<mixed>
}

type SetFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  payload: string
}

export type FilterAction =
  | SetFilterAction

export type CatalogAction =
  | ReceiveItemsAction
  | RequestItemsAction


export const getAllItems = () => ({
  type: 'GET_ALL_ITEMS',
})

export const receiveItems = (payload: Array<mixed>) => ({
  type: 'RECEIVE_ITEMS',
  payload,
})

export const requestItems = () => ({
  type: 'REQUEST_ITEMS',
})

export const filterItem = (payload: string) => ({
  type: 'SET_VISIBILITY_FILTER',
  payload,
})
