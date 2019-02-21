var express = require('express');
var router = express.Router();
var db=require('../libs/base.js');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/findAll',async (req,res)=>{
    let data;
    try{
        data=await db.find('goodlist',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});
router.get('/findorder',async (req,res)=>{
    let data;
    try{
        data=await db.find('order',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});


router.get('/updateOrder', async (req, res) => {
    let data;
    let {guid,num } = req.query;
    let d=await db.find('order',{guid});
    if(d.data.length!=0){
        data=await db.update('order',{guid},{num:parseInt(num)});
    };
    res.send(data);
});


router.get('/addGood', async (req, res) => {
    let data;
    let { name,imgurl,price,guid,num } = req.query;
    let d=await db.find('order',{guid});
    if(d.data.length!=0){
        let currentNum=parseInt(d.data[0].num);
        console.log(d.data[0].num);
        data=await db.update('order',{guid},{num:currentNum+parseInt(num)});
    }else{
        try {
            data = await db.insert('order', {name,imgurl,price,guid,num});
        } catch (err) {
            data = err;
    }
    }
    
    res.send(data);
});
// router.get('/addGood', async (req, res) => {
//     let data;
//     let { name,imgurl,Ename,jianjie,price,type,guid,num } = req.query;
//     try {
//         data = await db.insert('order', { name,imgurl,Ename,jianjie,price,type,guid,num });
//     } catch (err) {
//         data = err;
//     }
//     res.send(data);
// });
// 
// 
// 查询guid删除订单单个
router.get('/delete', async (req, res) => {
    let data;
    try {
        data = await db.delete('order', { guid: req.query.guid });
    } catch (err) {
        data = err;
    }
    try {
        data = await db.find('guid', {}, 0);
    } catch (err) {
        data = err;
    }
    res.send(data);
});

module.exports = router;
