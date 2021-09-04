import React from 'react'
import "../../StyleSheet/Messaging.css"
import MessageWindow from './MessageWindow'
import MessageList from './MessageList'
const Messaging = () => {
    return (
        <div className="messaging">
           <MessageList/>
           <MessageWindow/>
        </div>
    )
}

export default Messaging
