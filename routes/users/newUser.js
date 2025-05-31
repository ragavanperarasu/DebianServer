const express = require('express')
const router = express.Router()
const UsersModel = require('../../models/user'); 

router.post('/newuser', async (req, res, next) => {
  let { name, regno, gender, dept, nmail } = req.body;

    nmail = nmail.toLowerCase();

  try {
    const result = await UsersModel.collection.insertOne({ name:name, regno:regno, gender:gender, dept:dept, mail:nmail, roll: 'Student'});

    if (result.insertedId) {
      res.send('success');
    } else {
      res.send('faild');
    }
  } catch (err) {
    res.send('faild');
  }
});


module.exports = router