import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({titulo}) => {
  return (
    <div className='titulo'>
        <h1>{titulo}</h1>
    </div>
  )
}

export default ItemListContainer