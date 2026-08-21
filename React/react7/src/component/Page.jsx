import React from 'react'
import Product from './Product'

const Page = ({products,setCartItem}) => {
  return (
    <div className='flex flex-wrap  mt-2 pb-5 '>
        {
            products.map((ele,ind)=><Product key={ind} product={ele} setCartItem={setCartItem} />)
        }
    </div>
  )
}

export default Page
