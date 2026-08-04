import React, { useState } from 'react'

const Register = ({ setToggle }) => {

    const [user,setUser] = useState([]);
    console.log(user)

    const [formData,setFormData] = useState({});
    console.log(formData)

    let handleFormData = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setUser([...user,formData]);
        setFormData({name:'',email:'',password:''});
    }

    return (
        <div className='bg-white w-90 rounded-2xl p-3 flex flex-col gap-4'>
            <h1 className='font-bold text-2xl font-sans'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <label htmlFor="Name_inp">
                    <p>Name </p>
                    <input
                        value={formData.name}
                        name='name'
                        className='border w-full p-1 rounded'
                        placeholder='Name'
                        type="text"
                        onChange={handleFormData}
                    />
                </label>
                <label htmlFor="Email_inp">
                    <p>Email </p>
                    <input
                        value={formData.email}
                        name='email'
                        className='border w-full p-1 rounded'
                        placeholder='Email'
                        type="email"
                        onChange={handleFormData}
                    />
                </label>
                <label htmlFor="Password_inp">
                    <p>Password </p>
                    <input
                        value={formData.password}
                        name='password'
                        className='border w-full mb-2 p-1 rounded'
                        placeholder='Password'
                        type='password'
                        onChange={handleFormData}
                    />
                </label>
                <button className='bg-blue-500 rounded py-1 px-3'>Register</button>
            </form>
            <p>
                Already have an account?
                <span className='text-blue-600 cursor-pointer ml-1' onClick={() => setToggle((prev) => prev = !prev)}>
                    Login
                </span>
            </p>
        </div>
    )
}

export default Register
