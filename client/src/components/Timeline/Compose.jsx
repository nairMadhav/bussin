import React from 'react'
import "../../StyleSheet/Compose.css"
import Avatar from '@material-ui/core/Avatar';
// import FileUploadButton from './FileUploadButton';
import ImageIcon from '@material-ui/icons/Image';
// import PollIcon from '@material-ui/icons/Poll';
import { useState } from 'react';
import axios from 'axios';

const Compose = () => {
    const profilePic=localStorage.getItem("profilePic")||""
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState("")
    const Post=(event)=>{
        const url="http://localhost:5000/api/post"
        const token=localStorage.getItem("user_id")
        const data=new FormData()
        data.append("desc",desc)
        data.append("file",file)

        axios.post(url,data,{headers:{
            "x-auth-token":token
        }}).then((res)=>{
            console.log(res)
            alert(res.data.message)
            setDesc('');
            setFile('');
        }).catch((error)=>{
            console.log(error)
        })

    }
    return (
        <div className="ComposeBox">
            <div className="topBox">
                <Avatar src={profilePic} style={{ height: '60px', width: '60px' }}/>
                <textarea placeholder="Write something..." onChange={(e)=>{setDesc(e.target.value);console.log(desc)}}></textarea>
            </div>
            <div className="bottomBox">
                <div className="fileOptions">
                {/* <FileUploadButton Icon={ImageIcon} usage="postImage" type="file"/> */}
                    <label htmlFor="image" className="ImageUpload">
                       <ImageIcon/>
                    </label>
                    <input id="image" type="file" onChange={(e)=>{setFile(e.target.files[0]);console.log(file)}} hidden/>
                </div>
                <div>
                {/* <PostButton text="Eureka" fn={Post}/> */}
                    <button onClick={Post} disabled={desc===""} className="button"><b>Eureka!</b></button>
                </div>
                
            </div>
        </div>
    )
}

export default Compose
