import React from 'react'
import Page from './Page'

  const [size, setSize] = useState('')
  const { item: { name, description, price } } = props
  const handleOnClick = e => {
    setSize(e.target.textContent)
  }

  return (
    <Page>
      <div className="container">
        <div className="product-image">
          <img src="classic-tee.jpg" alt="classic-tee" />
        </div>
        <div className="product-info">
          <h1>T-shirt</h1>
          <div className="price">
            <span>price</span>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore id, molestias reiciendis enim
              voluptatem est eaque sunt, perferendis voluptate quis recusandae explicabo,
              quae saepe sed eum ullam! In, dicta!
            </p>
          </div>
          <div className="product-selection">
            <span>size{size === '' && <span className="req-star">*</span>}</span>
            <button className="btn" onClick={handleOnClick}>S</button>
            <button className="btn" onClick={handleOnClick}>M</button>
            <button className="btn" onClick={handleOnClick}>L</button>
          </div>
          <button className="btn add-cart">Add To Cart</button>
        </div>
      </div>
    </Page>
  )
}
