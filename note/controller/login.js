
const {Router}=require("express");
const router=Router();
const user=require("../dateBase/models/users");
router.post("/login",(req,res)=>{
    let {email,password}=req.body;
    user.findOne({email}).then(data=>{
        if(!data){
            res.json({
                code:401,
                msg:"该用户不存在"
            })
        }
        else if(data.password!=password){
            res.json({
                code:402,
                msg:"密码不正确"
            })
        }
        else if(data.password==password){
            req.session.user=data;
            let userMsg={
                username:data.username,
                email:data.email,
                avatar:data.avatar
            }
            res.json({
                code:200,
                msg:'登录成功'
            })
        }
         

    })
})
// 退出登录
router.delete('/unLogin',(req,res)=>{
    req.session.destory(function(err){
        if(err){
            console.log(err);
        }else{
            res.clearCookie('sid');
            res.json({
                code:200,
                msg:'退出登录'
            })
        }
    })
})
module.exports=router;