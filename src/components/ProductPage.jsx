import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCart, addCartError } from '../actions/cart.actions'
import Page from './Page'

function ProductPage (props) {
  const [size, setSize] = useState(null)

  const { item: { id, name, description, price } } = props

  const handleOnClick = e => {
    setSize(e.target.textContent)
  }

  const onClickHandler = () => {
    if (size) {
      props.dispatch(addCart({ id, name, price, quantity: 1, size }))
    } else {
      props.dispatch(addCartError({ code: 400, msg: 'Size must be selected before adding to cart' }))
    }
  }

  return (
    <Page>
      <div className="container">
        <div className="product-image">
          <img src="classic-tee.jpg" alt="classic-tee" />
        </div>
        <div className="product-info">
          <h1>{name}</h1>
          <div className="price">
            <span>${price}</span>
          </div>
          <div className="description">
            <p>
              {description}
            </p>
          </div>
          <div className="product-selection">
            <span>size{!size && <span className="req-star">*</span>}</span>
            <button className="btn size-btn" onClick={handleOnClick}>S</button>
            <button className="btn size-btn" onClick={handleOnClick}>M</button>
            <button className="btn size-btn" onClick={handleOnClick}>L</button>
          </div>
          <button className="btn add-cart" onClick={onClickHandler}>Add To Cart</button>
        </div>
      </div>
    </Page>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(ProductPage)
