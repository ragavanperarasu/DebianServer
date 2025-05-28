const express = require('express');
const router = express.Router();
const civil = require('../../models/reg2022/civil');

router.post('/getpost', async (req, res) => {
  try {
    const { sem, dept } = req.body;

    const semesterData = await civil.findOne({ sem });

    res.send(semesterData)

  } catch (err) {
    console.error('❌ Error fetching semester data:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

module.exports = router;
