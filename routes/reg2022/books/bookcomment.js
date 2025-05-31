const express = require('express');
const router = express.Router();

const civil = require('../../../models/reg2022/civil');
const cse = require('../../../models/reg2022/civil');
const ece = require('../../../models/reg2022/civil');
const eee = require('../../../models/reg2022/civil');
const eie = require('../../../models/reg2022/civil');
const ibt = require('../../../models/reg2022/civil');
const it = require('../../../models/reg2022/civil');
const mech = require('../../../models/reg2022/civil');
const prod = require('../../../models/reg2022/civil');



router.post('/bookcom', async (req, res) => {
  try {
    const { department, sem, subname, postdate, com, commentby } = req.body;
 
    let deptModel;
    if (department === 'Civil Engineering') deptModel = civil;
    else if (department === 'Computer Science Engineering') deptModel = cse;
    else if (department === 'Electronics And Communication Engineering') deptModel = ece;
    else if (department === 'Electrical And Electronics Engineering') deptModel = eee;
    else if (department === 'Electronics And Instrumentation Engineering') deptModel = eie;
    else if (department === 'Industrial Bio Technology') deptModel = ibt;
    else if (department === 'Information Technology') deptModel = it;
    else if (department === 'Mechanical Engineering') deptModel = mech;
    else if (department === 'Production Engineering') deptModel = prod;
    else {
      return res.status(400).json({ error: 'Invalid department name' });
    }


   const newComment = {
      commentby,
      com,
      cdate: new Date()
    };

    const result = await deptModel.updateOne(
      {
        sem: sem,
        "sub.subname": subname,
        "sub.books.postdate": new Date(postdate)
      },
      {
        $push: { "sub.$[s].books.$[q].comment": newComment }
      },
      {
        arrayFilters: [
          { "s.subname": subname },
          { "q.postdate": new Date(postdate) }
        ]
      }
    );

     if (result.modifiedCount === 1) {
      res.send('success')
    } else {
      res.send('faild')
    }
  } catch (err) {
    console.error('❌ Upload failed:', err);
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
});

module.exports = router;