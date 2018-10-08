const mongoose=require("mongoose");
const artical=mongoose.Schema({
    author:String,
    title:{
        type:String,
        index:1
    },
    content:String,
    contentText:String,
    looknums:{
        type:Number,
        default:0
    },
    commontNums:{
        type:Number,
        default:0
    },
    tags:Array,
   
    authorMsg:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'use'
    }
},{versionKey:false,timestamps:{craateAt:"createTime",updateAt:"updateTime"}})
module.exports=mongoose.model('artical',artical);