import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import PopForm from './component/PopForm'
import AllCars from './pages/AllCars'

const App = () => {
  const [toggle,setToggle] = useState(false);
  const [users, setUsers] = useState(()=>{
    let savedUser = localStorage.getItem('users') ;
    return savedUser ? JSON.parse (savedUser) : [] ;
  });

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
  },[users])

  const [edtUser,setEdtUser] = useState(null);
  return (
    <div className='min-h-screen bg-gray-800 text-white p-2 flex flex-col'>
      <Navbar setToggle={setToggle} setEdtUser={setEdtUser} />
      {
        toggle ? (<PopForm setUsers={setUsers} users={users} edtUser={edtUser} setEdtUser={setEdtUser} setToggle={setToggle} />) : (<AllCars setEdtUser={setEdtUser} setUsers={setUsers} setToggle={setToggle} users={users} />) 
      }
    </div>
  )
}

export default App
