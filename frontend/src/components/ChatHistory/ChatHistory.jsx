import React, { useEffect, useRef } from 'react'
import "./ChatHistory.scss";
import Message from '../Message';
const ChatHistory = ({ chatHistory }) => {


    const ref = useRef();

    useEffect(() => {
        if (ref.current) {

            console.log("ref");
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, [chatHistory, ref]);

    const messages = chatHistory.map(msg => <Message message={msg.data} />);

    return (
        <div ref={ref} className="ChatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    )
}

export default ChatHistory