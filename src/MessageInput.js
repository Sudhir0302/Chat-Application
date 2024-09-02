import React from 'react';
import "./App.css";

const MessageInput = ({ Msg, setMsg, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="message-input">
            <input     //input text box
                className='input'
                type='text'
                placeholder='Enter a message'
                value={Msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button className="send" type='submit'>Send</button>
        </form>
    );
}

export default MessageInput;
