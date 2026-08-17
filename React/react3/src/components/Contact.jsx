import React, { useState } from 'react'

const Contact = () => {
  let [count, setCount] = useState(0);

  return (
    <div className='bg-gray-400 flex justify-center align-center gap-4'>
      <p className=' inline'>Count = {count}</p>
      <button  className=' bg-white text-black h-8 w-fit p-0.5' onClick={()=>{
        // setCount((prev)=> prev + 1)
        setCount(count + 1);
        }} >Increment</button>
    </div>
  )
}

export default Contact;
