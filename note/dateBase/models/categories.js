const mongoose=require("mongoose");
const category= new mongoose.Schema({
    name:{
        type:String,
        unique:true
    }
},{versionKey:false,timeStemps:{createAt:'createTime',updateAt:'updateTime'}})
module.exports=mongoose.model('category',category);