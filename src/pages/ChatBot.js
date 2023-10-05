import React from 'react'
import Header from '../components/Header'
import ChatBotComponent from '../components/ChatBot'

function ChatBot() {
  return (
    <div>
        <Header prop={true} />
        <ChatBotComponent />
    </div>
  )
}

export default ChatBot