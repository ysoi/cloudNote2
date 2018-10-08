const mongoose=require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/cloudNote",{useNewUrlParser:true}
    //连接数据库
);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connect error!'));
db.once('open',function(){
   console.log('Success!');
});
module.exports=db;