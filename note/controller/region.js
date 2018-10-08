const {Router}=require("express");
const router=Router();
const user=require("../dateBase/models/users");
// validator验证器
const isEmail=require('validator/lib/isEmail');
router.post('/region',(req,res)=>{
    let {username,email,password}=req.body;
    console.log(username,email,password);
    user.findOne({email}).then(data=>{
      if(data){
          res.json({
              code:401,
              msg:"该邮箱已被注册"
          })
        }else{
            if(isEmail(email)){
                user.create({username,email,password}).then(data=>{
                    res.json({
                        code:200,
                        msg:"注册成功"
                    })
                });
            }else{
                res.json({
                    code:401,
                    msg:'邮箱格式不正确'
                })

                
            }
        }
    })
})
module.exports=router;