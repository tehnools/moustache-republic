import React from 'react'
import { connect } from 'react-redux'
import { removeCart } from '../actions/cart.actions'

function CartItem ({ name, price, size, quantity }) {
  return (
    <div className="cart-item">
      <img src="classic-tee.jpg" alt="classic-tee" />
      <div className="cart-item-info">
        <span>{name}</span>
        <span>{quantity} x {price}</span>
        <span>Size:{size} </span>
        <button className="btn" onClick={removeCart}>remove item</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartItem)
