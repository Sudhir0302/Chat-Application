import React, { useState } from 'react';

const MessageInput = ({retriveData}) => {

    const[msg,setMsg]=useState("");
    const handleData=(e)=>{
        e.preventDefault();
        retriveData(msg);
        setMsg("")
    }
    return (
        <form className="message-input" onSubmit={handleData}>
            <input
                className='text-black'
                type='text'
                placeholder='Enter a message'
                value={msg}
                onChange={(e) => 
                    setMsg(e.target.value)
                }
            />
            <button className="bg-green-400 rounded-lg w-14" type='submit'>Send</button>
        </form>
    );
}

export default MessageInput;
