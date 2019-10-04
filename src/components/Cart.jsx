import React from 'react'
import { connect } from 'react-redux'

function Cart ({ children }) {
  return (
    <div>
      { children }
    </div>
  )
}

export default connect()(Cart)
