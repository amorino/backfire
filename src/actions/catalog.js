export const GET_ALL_ITEMS = 'catalog/all'
export const RECEIVE_ITEMS = 'catalog/recieve'
export const REQUEST_ITEMS = 'catalog/request'
export const SET_VISIBILITY_FILTER = 'catalog/filter'

export const getAllItems = () => ({
  type: GET_ALL_ITEMS,
})

export const receiveItems = payload => ({
  type: RECEIVE_ITEMS,
  payload,
})

export const requestItems = payload => ({
  type: REQUEST_ITEMS,
  payload,
})

export const filterItem = payload => ({
  type: SET_VISIBILITY_FILTER,
  payload,
})
