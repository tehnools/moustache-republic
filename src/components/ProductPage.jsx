import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCart } from '../actions/cart.actions'
import Page from './Page'

function ProductPage (props) {
  const [size, setSize] = useState('')
  const { item: { name, description, price } } = props

  const handleOnClick = e => {
    setSize(e.target.textContent)
  }

  const onClickHandler = () => props.dispatch(addCart(props.item))

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
            <span>size{size === '' && <span className="req-star">*</span>}</span>
            <button className="btn" onClick={handleOnClick}>S</button>
            <button className="btn" onClick={handleOnClick}>M</button>
            <button className="btn" onClick={handleOnClick}>L</button>
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
