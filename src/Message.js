import React, { useState } from 'react'
import MessageInput from './MessageInput'

const Message = () => {
    const[data,setData]=useState([]);
    // const storemsg=[...data];
    const handleData =(data1)=>{
        data.push(data1);
        setData([...data]);
    };
  return (
        <div className="text-white text-xl flex justify-between p-4 items-center">
            <div className="flex flex-col w-auto gap-2">
                <h1>Receiver</h1>
                <div className="bg-white text-black h-64 w-80 mb-10 flex justify-center items-start p-4 overflow-scroll">
                    <h1>Display</h1>
                </div>
            </div>
            <div className="flex flex-col w-auto gap-2">
                <h1>Sender</h1>
                <div className="bg-white text-black h-64 w-80 flex justify-center items-start p-4 overflow-scroll">
                    {/* <h1>Display</h1> */}
                    <p>
                        {data.map((msg,key)=>(
                            <p key={key}>{msg}</p>
                        ))}
                    </p>
                </div>
                {/* <input 
                    type="text" 
                    className="border border-gray-300 w-auto h-9 rounded p-2 mt-2 text-black"
                    placeholder="Type a message..." 
                /> */}
                <MessageInput retriveData={handleData}/>
            </div>
        </div>
  )
}

export default Message