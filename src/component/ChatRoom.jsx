import React, { useState, useEffect } from 'react';

const ChatRoom = ({ user, messages, sendMessage }) => {
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== '') {
      sendMessage({ sender: user._id, receiver: receiverUserId, content: messageInput });
      setMessageInput('');
    }
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span>{message.sender}: </span>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
