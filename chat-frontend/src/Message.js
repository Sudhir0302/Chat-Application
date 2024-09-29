import React, { useEffect, useState } from 'react'
import MessageInput from './MessageInput'
import axios from 'axios';

const Message = () => {
    const[data,setData]=useState([]);
    const[data2,setData2]=useState([]);
    // const storemsg=[...data];

    useEffect(()=>{
        axios.get('http://localhost:3005/').then(
            res=>{
                setData2(pdata=>[...pdata,res.data])
            });
    },[data])

    const handleData =(data1)=>{
        setData(pdata=>[...pdata,data1])
    };
  return (
        <div className="text-white text-xl flex justify-between p-4 items-center">
            <div className="flex flex-col w-auto gap-2">
                <h1>Receiver</h1>
                <div className="bg-white text-black h-64 w-80 mb-10 p-4 overflow-scroll">
                    {/* <h1>Display</h1> */}
                    {data.length > 0 ? (
                        data2.map((item, index) => (
                            <p key={index}>{item.msg}</p>  // Render each object's msg property
                        ))
                    ) : (
                        <p>No messages received yet.</p>  // Placeholder message
                    )}
                </div>
            </div>
            <div className="flex flex-col w-auto gap-2">
                <h1>Sender</h1>
                <div className="bg-white text-black h-64 w-80 overflow-scroll">
                    {/* <h1>Display</h1> */}
                        {data.map((msg,key)=>(
                            <p key={key}>{msg}</p>
                        ))}
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
