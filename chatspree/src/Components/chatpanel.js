import React, { useEffect, useState } from 'react';
import { socket } from '../socket';
import Nextbutton from './nextbutton';

export default function Chatpanel() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
     const name = prompt("Enter your name")
     socket.emit("join-event", name);
     setUsername(name);

     socket.on("receive-message", (data) => {
      setMessages((prev) => [...prev, { 
        sender: data.username, 
        text: data.message 
      }
    ]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);
  const handleSend = () => {

     const trimmedMessage = message.trim();
    if (trimmedMessage !== "") {
      const newMessage = { 
        sender: username, 
        text: trimmedMessage,
      };
      socket.emit("send-message", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
  }
}

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSend();
  }
}
  

  return (
    <div className='h-screen w-5/6 flex flex-col'>
      <div className="bg-slate-100 h-5/6 w-full flex flex-col justify-between p-4 overflow-hidden">
          <div className="flex flex-col gap-2 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.sender === username ? "self-end bg-green-200" : "self-start bg-gray-200"
              } px-4 py-2 rounded-lg rounded-br-none`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gray-200 text-sm text-black px-4 py-2 rounded-lg shadow">
            👤 <strong>User:</strong> {username} &nbsp;&nbsp;<strong> Gender:</strong> Male
          </div>
        </div>
      </div>

      <div className="bg-gray-800 h-1/6 flex flex-row">
        <div className="h-full w-5/6 flex justify-between items-center px-10 gap-4">
          <input
            type="text"
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            value={message}
            className="flex-grow px-6 py-3 text-black bg-white rounded-full focus:outline-none"
          />
          <button
          onClick={handleSend}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Send
          </button>
        </div>
        <Nextbutton />
      </div>
    </div>
  );
}
