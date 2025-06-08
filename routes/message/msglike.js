const express = require('express');
const router = express.Router();

const MessageModel = require("../../models/message");


router.post('/msglike', async (req, res) => {
  try {
    const { createdAt, mail } = req.body;
   const result = await MessageModel.updateOne(
      {
        createdAt: new Date(createdAt),
        "likes": { $ne: mail },
      },
      {
        $addToSet: { "likes": mail },
        $inc: { "likec": 1 }
      }
    );
    
    if(result.modifiedCount == 1){
      res.send("success")
    }
    else{
      res.send("faild")
    }

  } catch (err) {
    console.error('❌ Upload failed:', err);
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
});

module.exports = router;