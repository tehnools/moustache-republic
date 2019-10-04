import { ADD_CART, REMOVE_CART, UPDATE_CART } from '../actions/cart.actions'
import _ from 'lodash'

const initialState = [{
  id: 1,
  name: 'Classic Tee',
  size: 'S',
  price: 10,
  quantity: 1
}]

const findItem = (list, comparedItem) => {
  console.log(list, comparedItem)
  return list.find(item => {
    console.log(item.id === comparedItem.id, item.size === comparedItem.size)
    if (item.id === comparedItem.id && item.size === comparedItem.size) {
      return true
    }
    console.log('false?')
    return false
  })
}

const arrToObj = (array, keyField) =>
  Object.assign({}, ...array.map(item => ({ [item[keyField]]: item }))
  )

const zip = (obj1, obj2) => {
  const zip = []
  for (const [key, item] of Object.entries({ ...obj1, ...obj2 })) {
    zip.push(item)
  }
  return zip
}

export default function cart (state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      if (findItem(state, action.item)) {
        return state.map(item => {
          item.quantity += action.item.quantity
          return item
        })
      } else {
        return [...state, action.item]
      }
    case REMOVE_CART:
      return [...state.filter((item) => {
        return item.id !== action.id
      })]
    case UPDATE_CART:
      // eslint-disable-next-line no-case-declarations
      const oldState = arrToObj(state, 'id')
      // eslint-disable-next-line no-case-declarations
      const newState = arrToObj(action.cart, 'id')
      return zip(oldState, newState)
    default:
      return state
  }
}
