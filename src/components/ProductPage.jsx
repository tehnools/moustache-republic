import React from 'react'
import Page from './Page'

export default function ProductPage () {
  return (
    <Page>
      <div className="container">
        <div className="product-image">
          <img src="classic-tee.jpg" alt="classic-tee"/>
        </div>
        <div className="product-info">
          <h1>T-shirt</h1>
          <div className="price">
            <span>price</span>
          </div>
        </div>
      </div>
    </Page>
  )
}
