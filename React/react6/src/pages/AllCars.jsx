import React, { useState } from 'react'
import Card from '../component/Card'

const AllCars = ({users,setToggle,setUsers,setEdtUser}) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {
        users.map((ele,idx)=>{
          return <Card key={idx} idx={idx} setEdtUser={setEdtUser} setUsers={setUsers} setToggle={setToggle} car={ele} />
        })
      }
    </div>
  )
}

export default AllCars
