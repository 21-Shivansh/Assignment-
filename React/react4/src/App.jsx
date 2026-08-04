import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Page3 from './components/Page3'

const App = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='h-screen bg-gray-400 flex items-center justify-center'>
      {toggle ? 
      ( <Login setToggle={setToggle} /> ) : 
      (<Register setToggle={setToggle}/> )}
    </div>
  )
}

export default App;
