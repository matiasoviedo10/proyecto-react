import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({mensaje}) => {

  return (
    <div className="prop-mensaje">
      <h1>{mensaje}</h1>
    </div>
  )
}

export default ItemListContainer
