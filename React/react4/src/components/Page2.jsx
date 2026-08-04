import React, { useState } from 'react'

const Page2 = () => {
    let [name,setName] = useState('');
  return (
    <div>
      <input onChange={(e)=>{
        setName(e.target.value);
      }} type="text" name="" id="" />
      <p>{name}</p>
    </div>
  )
}

export default Page2
