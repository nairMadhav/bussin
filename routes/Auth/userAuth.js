const router=require('express').Router()
const userModel=require('../../model/User/user')
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
    form.parse(request,async(error,fields,files)=>{
        const {username,password,confirmPassword}=fields
        const {profilePicture}=files
        if(!username||!password||!confirmPassword||!profilePicture){
            return(res.status(400).json({message:"All fields must be entered"}))
        }
        //checking for duplicate users
        const user=await(userModel.findOne({
            username:username
        }))
        if(user){
            res.sendStatus(400).json({message:"Username taken"})
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
router.post('api/user/login',(req,res)=>{
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
        const validatedPassword=await bcrypt.compare(password,user.password)
        if(!validatedPassword){
            return res.send(400).json({message:"invalid credentials"})
        }
        const token=JWT.sign({id:userExists._id},process.env.jwt_secret)
        return res.status(200).json({token:token,profilePicture:userExists.profilePicture})
    })
})
module.exports=router;