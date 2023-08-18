import React from 'react'
import "./ChatInput.scss"
const ChatInput = ({ onSend }) => {
    return (
        <div className="ChatInput">
            <input onKeyDown={onSend} />
        </div>
    )
}

export default ChatInput