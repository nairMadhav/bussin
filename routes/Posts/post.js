const router=require('express').Router()
const postModel=require('../../model/Post/post')
const userModel=require('../../model/User/user')
const cloudinary=require('cloudinary')
const JWT=require('jsonwebtoken')
const Formidable=require('formidable')
require('dotenv').config()

//POST+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('api/post',async(req,res)=>{
    const token=req.header*('x-auth-token')
    const verifiedToken=JWT.sign(token,process.env.jwt_secret)


    const user_id=verifiedToken.id

    const user=await userModel.findOne({_id:user_id})

    const form=new Formidable.IncomingForm()

    form.parse(req,(error,fields,files)=>{
        const {postDesc}=fields
        const {postImage}=files
    })
    if(!file){
        console.log('only text')
    }else{
        console.log('image found')
    }
})

module.exports=router
