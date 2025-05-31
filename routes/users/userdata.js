const express = require('express')
const router = express.Router()
const UsersModel = require('../../models/user'); 

router.post('/userdata', async (req, res, next) => {
  const { mail, regno } = req.body;
  
const nmail = mail.toLowerCase();

  try {
    const result = await UsersModel.collection.findOne({mail: nmail, regno});

    if (result) {
      res.send(result);
    } else {
      res.send('faild');
    }
  } catch (err) {
    res.send('faild');
  }
});


module.exports = router