const {Router}=require("express");
const router=Router();
const category=require("../dateBase/models/categories");
router.get('/category',(req,res)=>{
    category.find().then(data=>{
        res.json({
            code:200,
            data
        })
    })
})
module.exports=router;