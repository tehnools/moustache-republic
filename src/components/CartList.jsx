import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'

function CartList ({ cart }) {
  return (
    <div className="cart-list">
      {cart && cart.map(item => (<CartItem key={item} item={item} />))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartList)
