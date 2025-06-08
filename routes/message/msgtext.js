const express = require('express')
const router = express.Router()
const MessageModel = require('../../models/message'); 

router.post('/msgtxt', async (req, res, next) => {
  let { text, timestamp } = req.body;


  try {
    const message = await MessageModel.create({text:text,
      createdAt: timestamp || Date.now(), 
    });
    res.send("done")
  } catch (err) {
    console.error('Error saving message:', err);
    res.send("falid");
  }

});


module.exports = router


