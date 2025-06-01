const express = require('express');
const router = express.Router();

const civil = require('../../models/reg2022/civil');
const cse = require('../../models/reg2022/cse');
const ece = require('../../models/reg2022/ece');
const eee = require('../../models/reg2022/eee');
const eie = require('../../models/reg2022/eie');
const ibt = require('../../models/reg2022/ibt');
const it = require('../../models/reg2022/it');
const mech = require('../../models/reg2022/mech');
const prod = require('../../models/reg2022/prod');

router.post('/getpost', async (req, res) => {
  try {
    const { sem, dept } = req.body;

     let deptModel;
        if (dept === 'Civil Engineering') deptModel = civil;
        else if (dept === 'Computer Science Engineering') deptModel = cse;
        else if (dept === 'Electronics And Communication Engineering') deptModel = ece;
        else if (dept === 'Electrical And Electronics Engineering') deptModel = eee;
        else if (dept === 'Electronics And Instrumentation Engineering') deptModel = eie;
        else if (dept === 'Industrial Bio Technology') deptModel = ibt;
        else if (dept === 'Information Technology') deptModel = it;
        else if (dept === 'Mechanical Engineering') deptModel = mech;
        else if (dept === 'Production Engineering') deptModel = prod;
        else {
          return res.status(400).json({ error: 'Invalid department name' });
        }

    const semesterData = await deptModel.findOne({ sem });

    res.send(semesterData)

  } catch (err) {
    console.error('❌ Error fetching semester data:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

module.exports = router;
