const express = require('express');
const router = express.Router();

const civil = require('../../../models/reg2022/civil');
const cse = require('../../../models/reg2022/cse');
const ece = require('../../../models/reg2022/ece');
const eee = require('../../../models/reg2022/eee');
const eie = require('../../../models/reg2022/eie');
const ibt = require('../../../models/reg2022/ibt');
const it = require('../../../models/reg2022/it');
const mech = require('../../../models/reg2022/mech');
const prod = require('../../../models/reg2022/prod');



router.post('/sem22view', async (req, res) => {
  try {
    const { department, sem, reg, subname, postdate } = req.body;

 
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


   const result = await deptModel.updateOne(
  {
    sem: sem,
    "sub.subname": subname
  },
  {
    $inc: { "sub.$[s].semqus.$[q].view": 1 }
  },
  {
    arrayFilters: [
      { "s.subname": subname },
      { "q.postdate": new Date(postdate) } // or use postid
    ]
  }
);
    res.status(200).json({ message: 'success', result });

  } catch (err) {
    console.error('❌ Upload failed:', err);
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
});

module.exports = router;