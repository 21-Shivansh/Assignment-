import React from 'react'

const Login = ({ setToggle }) => {
  return (
    <div className='bg-white w-90 rounded-2xl p-3 flex flex-col gap-4'>
          <h1 className='font-bold text-2xl font-sans'>Login</h1>
          <form onSubmit={() => { console.log('hello') }} className='flex flex-col gap-2'>
              <label htmlFor="Email_inp">
                  <p>Email </p>
                  <input
                      className='border w-full p-1 rounded'
                      placeholder='Email'
                      type="email"
                  />
              </label>
              <label htmlFor="Password_inp">
                  <p>Password </p>
                  <input
                      className='border w-full mb-2 p-1 rounded'
                      placeholder='Password'
                      type='password'
                  />
              </label>
              <button className='bg-blue-500 rounded py-1 px-3'>Login</button>
          </form>
          <p>
            Create a new account? 
            <span className='text-blue-600 cursor-pointer ml-1' onClick={()=>setToggle((prev)=> prev = !prev)}>
                Register
            </span>
          </p>
      </div>
  )
}

export default Login
