const {Router} =require('express');
const router=Router();
const path=require('path');
// 导入自定义逻辑文件
const region=require("./region");
const login=require("./login");
const artical=require("./artical");
const category=require("./category");

router.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/index.ejs"));
});
router.use(region);
router.use(login);
router.use(artical);
router.use(category);
module.exports=router;
