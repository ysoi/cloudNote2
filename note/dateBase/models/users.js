const mongoose=require("mongoose");
const user=new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    avatar:{
        type:String,
        default:'F:\web前端\vue\cloudNote\note\public\images\01person.jpg'
    }
},{versionkey:false})
module.exports=mongoose.model("user",user);