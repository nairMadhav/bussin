import React from 'react'
import { useState } from 'react'
import FileUploadButton from '../Timeline/FileUploadButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../StyleSheet/Auth.css'
import axios from 'axios'

const Signup = () => {

    const [user,setUser]=useState({
        username:'',
        password:'',
        confirmPassword:'',
        profilePic:null
    })
    const handleChange=(event)=>{
        console.log(user)
        setUser({
            ...user,
            [event.target.id]:event.target.files?event.target.files[0]:event.target.value
        })
    }
    const signUp=(event)=>{
        event.preventDefault();
        const data=new FormData()
        data.append('username',user.username)
        data.append('password',user.password)
        data.append('confirmPassword',user.confirmPassword)
        data.append('profilePic',user.profilePic)

        const URL="http://localhost:5000/api/user/register"
        axios.post(URL,data).then((res) => {alert(res.data.message);}).catch((err)=>{console.log(err);})
    }
    return (
        <div className="formContainer">
            <form className="Form">
            <h1>Sign Up</h1>
            <br></br>
                <label>username</label>
                <input onChange={handleChange} type="text" placeholder="Username..." id='username'></input>

                <label>password</label>
                <input onChange={handleChange} type="password" placeholder="Password..." id='password'></input>
                
                <label>Confirm password</label>
                <input onChange={handleChange} type="password" placeholder="Re-Enter Password..." id='confirmPassword'></input>

                <FileUploadButton Icon={AccountCircleIcon} usage="profilePictureUpload" type="file" id="profilePic" onChange={handleChange}/>

                <button  className="button" type="submit" onClick={signUp}>Sign Up</button>
            </form>
            
        </div>
    )
}

export default Signup


