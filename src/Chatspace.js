import React, { useState } from 'react';
import "./App.css";
import MessageInput from './MessageInput';
import Message from './Message';

const Chatspace = () => {
    const [Msg, setMsg] = useState('');
    const [Servermsg, setServermsg] = useState(['Not connected']);
    const [Submittedmsg, setSubmittedmsg] = useState(['Your chat is empty']);

    function handleSubmit(e) {
        e.preventDefault();
        if (Submittedmsg[0] === 'Your chat is empty') {
            setSubmittedmsg([Msg]);
            setMsg('');
        } else {
            setSubmittedmsg([...Submittedmsg, Msg]);
            setMsg('');
        }
    }

    return (
        <div className='main'>
            <div className='display'>
                {Submittedmsg.map((msg, index) => (
                    <div key={index}>
                        <Message sender="You" msg={msg} />
                        <Message sender="Server" msg={Servermsg[0]} />
                    </div>
                ))}
            </div>
            <MessageInput 
                Msg={Msg}
                setMsg={setMsg}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Chatspace;
