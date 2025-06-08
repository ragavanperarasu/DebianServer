const express = require('express')
const router = express.Router()
const UsersModel = require('../../models/user'); 

router.post('/newuser', async (req, res, next) => {
  let { name, regno, gender, dept, nmail } = req.body;

  nmail = nmail.toLowerCase();

  const roll = nmail.endsWith('@gct.ac.in') ? 'Student' : 'Normal';
  console.log(roll)
  try {
   
    const result = await UsersModel.create({ name:name, regno:regno, gender:gender, dept:dept, mail: nmail, roll: roll });

    res.send('success');
  
  } catch (err) {
    res.send('faild');
  }
});


module.exports = router