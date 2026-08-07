import React, { useRef, useState } from 'react'

const Cart = () => {

    const [formData, setFormData] = useState([]);

    let formRef = useRef({});

    let handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            pname:formRef.current.name.value,
            item:formRef.current.item.value,
            category:formRef.current.category.value,
            price:formRef.current.price.value,
            image:formRef.current.imageUrl.value
        }
        setFormData([...formData,obj]);
    }
  return (
      <form onSubmit={handleSubmit} className='w-80 bg-white flex flex-col gap-4 p-4' action="">
        <label className='flex flex-col' htmlFor="name">Name
            <input ref={(e)=>{formRef.current.name = e}} name='name' className='bg-gray-200 rounded border-0 ' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="item">Item
            <input ref={(e)=>{formRef.current.item = e}} name='item' className='bg-gray-200 rounded border-0 ' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="category">Category
            <select ref={(e)=>{formRef.current.category = e}} className='bg-gray-200 rounded border-0 ' name="category" id="">
                <option value="Sc">Select Category---</option>
                <option value="kids">Kids</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </select>
        </label>
        <label className='flex flex-col' htmlFor="price">Price
            <input ref={(e)=>{formRef.current.price = e}} name='price' className='bg-gray-200 rounded border-0 ' type='number' />
        </label>
        <label className='flex flex-col' htmlFor="price">Image URL
            <input ref={(e)=>{formRef.current.imageUrl = e}} name='price' className='bg-gray-200 rounded border-0 ' type='url' />
        </label>
        <button className='bg-blue-400 border rounded-4xl py-2'>Add the Item</button>
      </form>
  )
}

export default Cart
