import React from 'react'

const Card = ({idx,car,setUsers,setToggle,setEdtUser}) => {
  let {name,imageURL,price} = car;

  let handleEdit = () => {
    setToggle(prev=>prev = !prev);
    setEdtUser(idx);
  };

  let handleDel = () => {
    setUsers((prev)=>
      prev.filter((ele,ind)=>
        ind !== idx
      )
    )
  };

  return (
    <div className='bg-black p-2 flex flex-col gap-3 rounded w-fit overflow-hidden'>
      <img className='w-70 object-cover rounded scale hover:scale-95 transition delay-50 duration-400 ease-in-out' src={imageURL} alt="" />
      <p className='text-xl'>{name}</p>
      <p>$ <span className='italic'>{price}</span></p>
      <div className='flex justify-between'>
        <button onClick={handleEdit} className='bg-amber-600 rounded py-1 px-3'>Edit</button>
        <button onClick={handleDel} className='bg-red-700 rounded py-1 px-3'>Delete</button>
      </div>
    </div>
  )
}

export default Card;
