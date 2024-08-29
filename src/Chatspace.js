import React, { useState } from 'react'
import "./App.css";

const Chatspace = () => {
    const [Msg,setMsg]=useState('')
    const [Servermsg,setServermsg]=useState(['Not connected'])
    const [Submittedmsg,setSubmittedmsg]=useState(['Your chat is empty'])
    function handleSubmit(e)
    {
        e.preventDefault()
        if(Submittedmsg[0]==='Your chat is empty'){
            setSubmittedmsg([Msg])
            setMsg('')
        }else{
            setSubmittedmsg([...Submittedmsg, Msg]);
            setMsg('')
        }
    }
    let sender=""
    if(Submittedmsg[0]!=='Your chat is empty'){
        sender="Sender: "
    }
    let server="server: "
    return (
    <div className='main'>
        <div className='display'>
            {Submittedmsg.map((msg, index) => (
                <>
                <p key={index}>{sender}{msg}</p>
                {Servermsg.map((msg, index) => (
                    <p key={index}>{server}{msg}</p>
                ))}
                </>
            ))}
        </div><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <input className='input'
                type='text' 
                placeholder='Enter a message' 
                value={Msg} 
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button className="send" type='submit'>send</button>
        </form>
    </div>
  )
}

export default Chatspace