import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'

const PopForm = ({setToggle,setUsers,setEdtUser,edtUser,users}) => {

  let edtObj = {
    name: "",
    price: "",
    imageURL: ""
  }
  
  if(edtUser !== null){
    edtObj = users[edtUser];
  }


  let {register,handleSubmit,reset,formState:{errors}} = useForm({
    mode:'onChange',
    defaultValues:edtObj,
  });

  
  let formSubmit = (data) => {
    if (edtUser !== null) {
      setUsers((prev) => 
        prev.map((ele, index) => 
          index === edtUser ? data : ele
        )
      );
      setEdtUser(null);
      setToggle(prev => !prev);
      reset();
    } else {
      setUsers(prev => [...prev, data])
      setToggle(prev => !prev);
      reset();
    }
  }

  let formCross = () => {
    setToggle(prev => !prev);
  }

  

  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-end'>
        <p className='bg-red-500 text-white w-5 text-center cursor-pointer' onClick={formCross}>X</p>
        <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-6 w-100 bg-black p-2 rounded-lg' action="">
          <label className='flex flex-col gap-1' htmlFor="name">Name
            <input {...register('name', {
              required: 'Name missing'
            })} className='p-1 text-lg border border-gray-500 rounded' type="text" placeholder='name' />
            {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
          </label>
          <label className='flex flex-col' htmlFor="name">Price
            <input {...register('price', {
              required: 'Price missing'
            })} className='p-1 text-lg border border-gray-500 rounded' type="number" placeholder='price' />
            {errors.price && <p className='text-red-700'>{errors.price.message}</p>}
          </label>
          <label className='flex flex-col' htmlFor="name">ImageURL
            <input {...register('imageURL', {
              required: 'ImageURL missing'
            })} className='p-1 text-lg border border-gray-500 rounded' type="url" placeholder='ImageURL' />
            {errors.imageURL && <p className='text-red-700'>{errors.imageURL.message}</p>}
          </label>
          <button className='bg-blue-600 rounded-b-lg py-2'>ADD CAR</button>
        </form>
      </div>
    </div>
  )
}

export default PopForm;
