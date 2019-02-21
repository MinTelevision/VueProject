var express = require('express');
var router = express.Router();
var db=require('../libs/base.js');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', async (req, res) => {
  let data;
  let {user,password} = req.body;
  try {
      data = await db.insert('user',{user,password});
  } catch (err) {
      data = err;
  }
  res.send(data);
});
router.post('/login', async (req, res) => {
  let data;
  let {user,password} = req.body;
  try {
      data = await db.find('user',{user,password});
      if (data.data[0].password === password) {
        res.send({
          status: "success",
        });
      } 
  } catch (err) {
      data = err;
      res.send({
        status: "fail"
      });
  }
  
});
module.exports = router;
