import React from 'react';
import "./App.css";

const Message = ({ sender, msg }) => {
    return (
        <p className="message">
            <strong>{sender}: </strong>{msg}
        </p>
    );
}

export default Message;
