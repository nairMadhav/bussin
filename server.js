const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();
require('dotenv').config();

//Middleware
app.use(cors());
//Mongoose config and connection
const mongoURI=process.env.mongoURI;
const mongoEssentials={
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(mongoURI,mongoEssentials,(error)=>{
    if(error){
        console.log(error)
    }
    return(console.log('Connection to the database was successful'))
})
//================Routes=======================

app.use(require('./routes/Auth/userAuth'))
app.use(require('./routes/Posts/post'))













//server configuration
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is up on ${PORT}`)
})
