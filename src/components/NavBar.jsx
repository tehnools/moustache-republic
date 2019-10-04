import { connect } from 'react-redux'
import React, { useState } from 'react'
import _ from 'lodash'
import '../sass/navbar.scss'
import CartList from './CartList'

function NavBar (props) {
  const { cart } = props
  const [showCartList, toggleCartList] = useState(false)

  return (
    <div className="navbar">
      <button onClick={() => { toggleCartList(!showCartList) }}>Cart({cart && _.sumBy(cart, 'quantity')})</button>
      {showCartList && <CartList/> }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar)
