import React, { useState } from 'react'

const Chatspace = () => {
    const [Msg,setMsg]=useState('')
    const [Submittedmsg,setSubmittedmsg]=useState('Your chat is empty')
    function handleSubmit(e)
    {
        e.preventDefault();
        setSubmittedmsg(Msg)
        setMsg('')
    }
  return (
    <div>
        <div className='display'>
            <h1>
                {Submittedmsg}
            </h1>
        </div><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Enter a message' 
                value={Msg} 
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default Chatspace