import { connect } from 'react-redux'
import React from 'react'
import _ from 'lodash'
import '../sass/navbar.scss'

function NavBar (props) {
  const { cart } = props

  return (
    <div className="navbar">
      <button>Cart({cart && _.sumBy(cart, 'quantity')})</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar)
