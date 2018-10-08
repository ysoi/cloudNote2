const {Router}=require("express");
const router=Router();
const artical=require("../dateBase/models/articles");
const user=require("../dateBase/models/users")
router.post('/announcement',(req,res)=>{
    if(req.session.user){
        let {title,content,tags,contentText}=req.body;
        let author=req.session.user.username;
        artical.create({
            title,
            content,
            tags,
            contentText,
            authorMsg:req.session.user._id
        }).then(data=>{
            res.json({
                code:200,
                data,
                msg:'发布成功'
            })
        })
    }else{
        res.json({
            code:403,//未登录
            msg:"登录后才可发表笔记"
        })
    }
})
router.get("/artical",(req,res)=>{
    if(req.session.user){
        artical.find().then(data=>{
            // console.log(data);
            //替换authorMsg
           
           
              
                res.json({
                    code:200,
                    data,
                  
                })
          
          
        })
    }else{
        res.json({
            code:403,
            msg:"未登录，无法获取笔记列表"
        })
    }
})
// 获取单片笔记的详情
router.get("/detail/:id",(req,res)=>{

    let {id}=req.params;
    console.log(id);
    artical.findOne({_id: id}).then(data=>{
       res.json({
           code:200,
           data
       })
    })
})
router.get("/user",(req,res)=>{
    if(req.session.user){
        user.find({username:req.session.user.username}).then(data=>{
           res.json({
               code:200,
               data
           })
        })
    }else{
        res.json({
            code:403,
            msg:"未登录"
        })
    }
})

module.exports=router;