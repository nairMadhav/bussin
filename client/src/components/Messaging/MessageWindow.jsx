import React from 'react'
import '../../StyleSheet/MessageWindow.css'
import { Avatar } from '@material-ui/core'
const MessageWindow = () => {
    
    return (
        <div className="MessageWindowContainer">
            <h1 className="userHeader" ><Avatar style={{"marginRight":"10px"}}/>User</h1>
        </div>
    )
}

export default MessageWindow
