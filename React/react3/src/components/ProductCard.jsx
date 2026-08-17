import React from 'react'

const ProductCard = ({id,name,price,imgUrl,delFunc}) => {
  return (
      <div className='h-fit w-fit border-2 '>
        <img src={imgUrl} alt="" />
        <p>Product Name : {name}</p>
        <p>Price : {price}</p>
        <button onClick={() => { delFunc(id) }}>Delete</button>
      </div>
  )
}

export default ProductCard
