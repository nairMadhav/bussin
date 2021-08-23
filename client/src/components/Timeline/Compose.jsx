import React from 'react'
import "../../StyleSheet/Compose.css"
import Avatar from '@material-ui/core/Avatar';
import FileUploadButton from './FileUploadButton';
import PostButton from './PostButton';
import ImageIcon from '@material-ui/icons/Image';
import PollIcon from '@material-ui/icons/Poll';

const Compose = () => {
    const profilePic=localStorage.getItem("profilePic")
    return (
        <div className="ComposeBox">
            <div className="topBox">
                <Avatar src={profilePic} style={{ height: '60px', width: '60px' }}/>
                <textarea placeholder="Write something..."></textarea>
            </div>
            <div className="bottomBox">
                <div className="fileOptions">
                <FileUploadButton Icon={ImageIcon} usage="postImage" type="file"/>
                <FileUploadButton Icon={PollIcon} usage="createPoll" type=""/>
                </div>
                <div>
                <PostButton text="Eureka"/>
                </div>
            </div>
        </div>
    )
}

export default Compose
