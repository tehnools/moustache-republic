export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const ADD_CART_ERROR = 'ADD_CART_ERROR'

export function addCart (item) {
  return {
    type: ADD_CART,
    item
  }
}

export function addCartError (error) {
  return {
    type: ADD_CART_ERROR,
    error
  }
}

export function updateCart (item) {
  return {
    type: UPDATE_CART,
    item
  }
}

export function removeCart () {
  return {
    type: REMOVE_CART
  }
}
