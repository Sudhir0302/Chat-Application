import React from 'react';
import "./App.css";

const Message = ({ sender, msg }) => {
    const time = new Date().toLocaleTimeString();
    return (
        <p className="message">
            <strong>{sender}: </strong>{msg} <span className="time">{time}</span>
        </p>
    );
}

export default Message;
