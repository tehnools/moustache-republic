import React from 'react'
import '../sass/main.scss'

export default function Page ({ children }) {
  return (
    <div className="page">
      {children}
    </div>
  )
}
