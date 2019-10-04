import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavBar from './components/NavBar'
import ErrorPopup from './components/ErrorPopup'
import ProductPage from './components/ProductPage'

const item = {
  id: 1,
  name: 'Classic Tee',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore id, molestias reiciendis enim
  voluptatem est eaque sunt, perferendis voluptate quis recusandae explicabo,
  quae saepe sed eum ullam! In, dicta!`,
  price: 10
}

function App ({ error }) {
  return (
    <div className="App">
      <NavBar />
      {error && (<ErrorPopup msg={error.msg}/>)}
      <ProductPage item={item}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(App)
