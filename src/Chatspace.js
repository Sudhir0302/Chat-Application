import React from 'react'
import Sidebar from './Sidebar'
import Message from './Message'
const Chatspace = () => {
  return (
    <div className="flex justify-normal items-start flex-row gap-40 mx-4 p-5">
        <div className='bg-gray-500 w-[20%] h-96 mt-5 rounded-lg'>
          <Sidebar/>
        </div>
        <div className='bg-gray-500 w-[100%] h-96 mt-5 rounded-lg'>
          <Message />
        </div>
    </div>
  )
}

export default Chatspace