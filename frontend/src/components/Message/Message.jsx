import React, { useMemo } from 'react';
import './Message.scss';
const Message = ({ message }) => {

    const displayMessage = useMemo(() => JSON.parse(message), [message]);
    return (
        <div className="Message" style={{ color: '#' + displayMessage?.colour }}>{displayMessage.body}</div>
    )
}

export default Message