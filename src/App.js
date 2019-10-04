import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductPage from './components/ProductPage'

const item = {
  id: 1,
  name: 'Classic Tee',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore id, molestias reiciendis enim
  voluptatem est eaque sunt, perferendis voluptate quis recusandae explicabo,
  quae saepe sed eum ullam! In, dicta!`,
  price: 10
}

function App () {
  return (
    <div className="App">
      <NavBar />
      <ProductPage item={item}/>
    </div>
  )
}

export default App
