const express = require('express')
const router = express.Router()
const MessageModel = require('../../models/message'); 

router.get('/msgget', async (req, res, next) => {
 
  try {
    const message = await MessageModel.find()
    res.send(message)
  } catch (err) {
    console.error('Error saving message:', err);
    res.send("falid");
  }

});


module.exports = router