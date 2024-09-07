import React, { useEffect, useState } from 'react';
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
        }
        setMsg('');
    }
    
    useEffect(() => {
        // Simulate server response only if there are new submitted messages
        if (Submittedmsg.length > 1 || (Submittedmsg.length === 1 && Submittedmsg[0] !== 'Your chat is empty')) {
            const timeout = setTimeout(() => {
                setServermsg((prevServermsg) => [...prevServermsg, "Server received your message"]);
            }, 1000); // Simulating delay of 1 second

            return () => clearTimeout(timeout); // Cleanup timeout
        }
    },[Submittedmsg]);

    return (
        <div className='main'>
            <div className='display'>
                {Submittedmsg.map((msg, index) => (
                    <div key={index}>
                        <Message sender="You" msg={msg} />
                        {Servermsg[index] && (
                            <Message sender="Server" msg={Servermsg[index]} />
                        )}
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
