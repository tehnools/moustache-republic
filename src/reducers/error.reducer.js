import { ADD_CART_ERROR } from '../actions/cart.actions'

export default function errorReducer (state = null, action) {
  switch (action.type) {
    case ADD_CART_ERROR:
      return action.error
    default:
      return state
  }
}
