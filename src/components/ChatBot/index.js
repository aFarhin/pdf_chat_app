import React from "react";
import "./styles.css";
import img2 from "../../assets/send.png";
import ChatMessage from '../Messenger'

function ChatBot() {
  return (
    <div>
      <div className="chatbot-container">
        <ChatMessage text="Why do we use React for frontend?" align="right" />
        <ChatMessage
          text="React is an open-source library known for its performance, flexibility, and ease of use. It simplifies the development of complex user interfaces."
          align="left"
        />
        <ChatMessage text="What is the virtual DOM in React?" align="right" />
        <ChatMessage
          text="The virtual DOM is a virtual representation of the actual DOM (Document Object Model). React uses it to efficiently update and render components by minimizing DOM manipulations."
          align="left"
        />
        <ChatMessage text="What are props in React?" align="right" />
        <ChatMessage
          text="Props (short for properties) are a way to pass data from a parent component to a child component in React. They are read-only and help make components reusable and dynamic."
          align="left"
        />
        <ChatMessage text="Explain the state in React." align="right" />
        <ChatMessage
          text="State is a mechanism for keeping track of mutable data within a component. When state changes, React re-renders the component to reflect the new state."
          align="left"
        />
        <ChatMessage text="What are React hooks?" align="right" />
        <ChatMessage
          text="React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to simplify component logic."
          align="left"
        />
        <ChatMessage text="How do you handle forms in React?" align="right" />
        <ChatMessage
          text="In React, you can handle forms using controlled components. Each form element, like input or textarea, has a value controlled by React state."
          align="left"
        />
      </div>
      <div className="cb-input-container">
        <input type="text" />
        <img src={img2} />
      </div>
    </div>
  );
}

export default ChatBot;
