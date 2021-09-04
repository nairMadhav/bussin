import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../StyleSheet/Auth.css'

const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:'',
    })
    const handleChange=(event)=>{
        console.log(user)
        setUser({
            ...user,
            [event.target.id]:event.target.value
        })
    }
    const login=(event)=>{
        event.preventDefault();
        const data=new FormData()
        data.append('username',user.username)
        data.append('password',user.password)

        const URL="http://localhost:5000/api/user/login"
        axios.post(URL,data).then((res) => {
            console.log(res);
            localStorage.setItem("uid",res.data.token)
            localStorage.setItem("profilePic",res.data.profilePic)
        }).catch((err)=>{
            
            console.log(err.response)
            
        })
    }
    return (
        <div className="formContainer">
            <form className="Form">
            <h1>Login</h1>
            <br></br>
                <label>username</label>
                <input onChange={handleChange} type="text" placeholder="Username..." id='username'></input>

                <label>password</label>
                <input onChange={handleChange} type="password" placeholder="Password..." id='password'></input>

                <button  className="button" type="submit" onClick={login}>Login</button>
            </form>
            
        </div>
    )
}

export default Login
