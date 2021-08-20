const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        profilePicture:{type:String,required:false}
})
const userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;
