const mongoose=require('mongoose')
// const { post } = require('../../../routes/Auth/userAuth')

const postSchema=mongoose.Schema({
    user:{type:String,required:true},
    desc:{type:String,required:true},
    file:{type:String,required:false, default:null},
    profilePic:{type:String,required:true,default:""},
    bulbs:{type:Number,required:true,default:0},
    comments:{type:Array,required:false,default:[]}
})
const postModel=mongoose.model('postModel',postSchema)

module.exports=postModel