import './App.css';
import { connect, sendMsg, disconnect } from './api';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';

function App() {


  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory(c => [...c, msg]);
    });

    return () => {
      disconnect();
    }
  }, []);


  const send = (event) => {
    if (event.keyCode === 13 && event.target.value.length > 0) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput onSend={send} />
    </div>
  );
}

export default App;
