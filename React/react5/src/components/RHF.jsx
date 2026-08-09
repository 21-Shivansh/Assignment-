import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

const RHF = () => {
    let {register,handleSubmit,reset,formState:{errors}} = useForm();

    let formSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='text-white'>
            React Hook Form
            <form onSubmit={handleSubmit(formSubmit)} className='w-80 bg-white flex flex-col gap-4 p-4 text-black' action="">
                <label className='flex flex-col' htmlFor="name">Name
                    <input {...register('name')} name='name' className='bg-gray-200 rounded border-0 ' type="text" />
                </label>
                <label className='flex flex-col' htmlFor="item">Item
                    <input {...register('item')} name='item' className='bg-gray-200 rounded border-0 ' type="text" />
                </label>
                <label className='flex flex-col' htmlFor="category">Category
                    <select {...register('category')} className='bg-gray-200 rounded border-0 ' name="category" id="">
                        <option value="Sc">Select Category---</option>
                        <option value="kids">Kids</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="price">Price
                    <input {...register('price')} name='price' className='bg-gray-200 rounded border-0 ' type='number' />
                </label>
                <label className='flex flex-col' htmlFor="price">Image URL
                    <input {...register('imageUrl')} className='bg-gray-200 rounded border-0 ' type='url' />
                </label>
                <button className='bg-blue-400 border rounded-4xl py-2'>Add the Item</button>
            </form>
            {/* <div className='text-white'>
                {
                    formData.map((ele, idx) => {
                        return (
                            <div>
                                <p>Name == {ele.pname}</p>
                                <p>Item == {ele.item}</p>
                                <p>Category == {ele.category}</p>
                                <p>Price == {ele.price}</p>
                                <p>ImageUrl == {ele.image}</p>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default RHF
