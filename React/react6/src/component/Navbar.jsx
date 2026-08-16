import React from 'react'

const Navbar = ({setToggle,setEdtUser}) => {
  let handleClick = () => {
    setToggle(prev => !prev );
    setEdtUser(null);
  };
  return (
    <div className='flex justify-between items-center bg-black rounded-xl p-2 mb-3'>
      <p className='text-3xl'>🤷😈✨</p>
      <div className='w-80 flex justify-between text-l'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={handleClick} className='bg-blue-500 py-1 px-2 rounded-xl text-xl cursor-pointer'>Upload Cars +</button>
    </div>
  )
}

export default Navbar
