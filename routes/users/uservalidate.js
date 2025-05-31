const express = require('express')
const router = express.Router()
const UsersModel = require('../../models/user'); 

router.post('/uservalidate', async (req, res, next) => {
  const { mail } = req.body;
const nmail = mail.toLowerCase();

  try {
    const result = await UsersModel.collection.findOne({mail: nmail});

    if (result) {
      res.send('present');
    } else {
      res.send('faild');
    }
  } catch (err) {
    res.send('faild');
  }
});


module.exports = router