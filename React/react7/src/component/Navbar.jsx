import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-2 rounded-sm flex justify-between items-center bg-[#bebebe]'>
        <div className='text-amber-800 text-4xl font-bold'><p>ATC ❤️</p></div>
        <div className='flex gap-20 text-2xl font-semibold text-black'>
            <p onClick={()=>setToggle(true)} className='cursor-pointer hover:text-gray-600'>Prducts</p>
            <p onClick={()=>setToggle(false)} className='cursor-pointer hover:text-gray-600'>Cart</p>
        </div>
        <div>
          Login
        </div>
    </div>
  )
}

export default Navbar

