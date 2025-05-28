const express = require('express')
const router = express.Router()
const reg2022Model = require('../../models/reg2022'); 

router.post('/getsub', async (req, res, next) => {
  try {
    const { dept, sem } = req.body;

    const deptData = await reg2022Model.findOne({ deptname: dept }).lean();

    const semData = deptData.semester.find(s => s.semno.toLowerCase() === sem.toLowerCase());

    return res.json({ subjects: semData.subject });

  } catch (error) {
    
    
  }
});



module.exports = router