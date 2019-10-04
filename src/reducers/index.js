import { combineReducers } from 'redux'
import cart from './cart.reducer'
import error from './error.reducer'

export default combineReducers({
  cart,
  error
})
