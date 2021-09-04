const router=require('express').Router()
const userModel=require('../../model/User/user.js')
const formidable = require('formidable');//body parser
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const cloudinary=require('cloudinary')
require('dotenv').config();

//image io config using cloudinary
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})

//route for user auth
router.post('/api/user/register',(req,res)=>{
    const form=new formidable.IncomingForm()
    form.parse(req,async(error,fields,files)=>{
        const {username,password,confirmPassword}=fields
        const {profilePicture}=files

        //form validation
        const regex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!username||!password||!confirmPassword||!profilePicture){
            return(res.status(400).json({message:"All fields must be entered"}))
        }
        if(username.length<6){
            return(res.status(400).json({message:"Username must be atleast 6 characters"}))
        }
        if(password!=confirmPassword){
            return(res.status(400).json({message:"Entered passwords do not match"}))
        }else if(password.length<8){
            return(res.status(400).json({message:"Password length must be atleast 8 characters"}))
        }else if(!regex.test(password)){
            return(res.status(400).json({message:"Password should contain atleast one number and one special character"}))
        }
        //checking for duplicate users
        const user=await(userModel.findOne({
            username:username
        }))
        if(user){
            return res.sendStatus(400).json({message:"Username taken"})
        }
        //uploading files
        cloudinary.uploader.upload(profilePicture.path,{folder:'/bussin/profiles'},async(error,res)=>{
            if(error){
                console.log(error)
            }
            console.log('user successfully created')
            const profileImageURL=res.secure_url
            //encrypting and hashing the user password
            const salt=await bcrypt.genSalt(15)
            const hashedPass=await bcrypt.hash(password,salt)
            const newUser=new userModel({
                username:username,
                password:hashedPass,
                profilePicture:profileImageURL
            })
            const savedUser=await newUser.save()

            const token=JWT.sign({id:savedUser._id},process.env.jwt_secret)
            return res.status(201).json({token:token,profilePicture:savedUser.profilePicture})
        })
    })
})
router.post('/api/user/login',(req,res)=>{
    const form=new formidable.IncomingForm()
    form.parse(req,async(error,fields,files)=>{
        const {username,password}=fields;
        if(!username||!password){
            return res.sendStatus(400).json({message:"Please enter all fields"})
        }
        const userExists=userModel.findOne({username:username})
        if(!userExists){
            return res.sendStatus(401).json({message:`user with ${username} does not exist in the database`})
        }
        const validatedPassword=async()=>await bcrypt.compare(password,userExists.password)
        if(!validatedPassword){
            return res.send(400).json({message:"invalid credentials"})
        }
        const token=JWT.sign({id:userExists._id},process.env.jwt_secret)
        return res.status(200).json({token:token,profilePicture:userExists.profilePicture})
    })
})
module.exports=router;