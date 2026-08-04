import React, { useState } from 'react'

const Page1 = () => {
    const [name,setName] = useState({user : 'RAMAN'});
  return (
    <div>
      Name of the user - {name.user};
      <button onClick={()=>{setName({user : "Batman"})}}>Change</button>
    </div>
  )
}

export default Page1;
