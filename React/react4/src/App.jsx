import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Page3 from './components/Page3'
import UserCard from './components/UserCard'

const App = () => {
  const [toggle,setToggle] = useState(false);
  const [user, setUser] = useState([]);
  console.log(user)
  return (
    <div>
      <div className='h-screen bg-gray-400 flex items-center justify-center'>
        {toggle ? (<Login setToggle={setToggle} />) : (<Register setUser={setUser} setToggle={setToggle} />)}
      </div>
      <div className='p-2'>
        {
          user.map((elem,idx)=>{
            return <UserCard key={idx} users={elem}/>
          })
        }
      </div>
    </div>
  )
}

export default App;
