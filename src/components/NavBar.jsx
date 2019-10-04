import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import '../sass/navbar.scss'

function NavBar (props) {
  const { cart } = props
  return (
    <div className="navbar">
      <button>Cart({cart && cart.length})</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar)
