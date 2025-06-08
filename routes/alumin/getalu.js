const express = require('express')
const router = express.Router()
const AluminModel = require('../../models/alumin'); 

router.get('/getalu', async (req, res, next) => {
 
  try {
    const message = await AluminModel.find()
    res.send(message)
  } catch (err) {
    console.error('Error saving message:', err);
    res.send("falid");
  }
});


module.exports = router