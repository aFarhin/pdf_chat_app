import React from 'react';
import './ChatMessage.css'; // 

const ChatMessage = ({ text, align }) => {
  
  const className = align === 'left' ? 'chat-message-left' : 'chat-message-right';

  return <p className={className}>{text}</p>;
};

export default ChatMessage;