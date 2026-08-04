import React from 'react'

const UserCard = ({users}) => {
    console.log(users)
  return (
    <div className='w-60 border rounded-xl border-black flex flex-col gap-3'>
      <img className='h-60 rounded-t-xl' src={users.imageURL} alt="" />
      <p>{users.name}</p>
      <p>{users.email}</p>
      <button className='bg-red-400 rounded-b-xl'>Delete</button>
    </div>
  )
}

export default UserCard;
