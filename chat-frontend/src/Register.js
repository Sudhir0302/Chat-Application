import React, { useState } from 'react'

const Register = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
  return (
    <div className='bg-gray-400 flex items-center h-screen'>
        <form className='w-64 mx-auto mb-12'>
            <input 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                type='text' 
                placeholder='username' 
                className='block w-full rounded-sm mb-2 p-2'/>
            <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='text' 
                placeholder='password' 
                className='block w-full rounded-sm mb-2 p-2'/>
            <button className='bg-green-300 block w-full rounded-sm p-2'>Register</button>
        </form>
    </div>
  )
}

export default Register