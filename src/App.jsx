import React, { useState, useEffect } from 'react';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import ChatRoom from './component/ChatRoom';
import socket from './socket';

const App = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleLogin = (userData) => {
  };

  const handleRegister = (userData) => {
  };

  const handleSendMessage = (messageData) => {
    socket.emit('sendMessage', messageData);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm onRegister={handleRegister} />
        </>
      ) : (
        <ChatRoom user={user} messages={messages} sendMessage={handleSendMessage} />
      )}
    </div>
  );
};

export default App;
