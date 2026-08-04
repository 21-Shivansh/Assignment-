import React, { useState } from 'react'

const Page3 = () => {
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    const [user,setUser] = useState([])
    console.log(user)

    const [formData,setFormData] = useState({});

    let handleInput = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        setUser([...user,formData])

    }

    
  return (
      <div className='bg-white w-90 rounded-2xl p-3 flex flex-col gap-4'>
            <h1 className='font-bold text-2xl font-sans'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <label htmlFor="Name_inp">
                    <p>Name </p>
                    <input
                        name='name'
                        onChange={handleInput}
                        className='border w-full p-1 rounded'
                        placeholder='Name'
                        type="text"
                    />
                </label>
                <label htmlFor="Email_inp">
                    <p>Email </p>
                    <input
                        name='email'
                        onChange={handleInput}
                        className='border w-full p-1 rounded'
                        placeholder='Email'
                        type="email"
                    />
                </label>
                <label htmlFor="Password_inp">
                    <p>Password </p>
                    <input
                        name='password'
                        onChange={handleInput}
                        className='border w-full mb-2 p-1 rounded'
                        placeholder='Password'
                        type='password'
                    />
                </label>
                <button className='bg-blue-500 rounded py-1 px-3'>Register</button>
            </form>
        </div>
  )
}

export default Page3
