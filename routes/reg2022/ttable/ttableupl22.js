const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const civil = require('../../../models/reg2022/civil');
const cse = require('../../../models/reg2022/cse');
const ece = require('../../../models/reg2022/ece');
const eee = require('../../../models/reg2022/eee');
const eie = require('../../../models/reg2022/eie');
const ibt = require('../../../models/reg2022/ibt');
const it = require('../../../models/reg2022/it');
const mech = require('../../../models/reg2022/mech');
const prod = require('../../../models/reg2022/prod');

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/reg2022/ttable");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}-${req.body.docname}${ext}`);
  },
});

const upload = multer({ storage: storage });

router.post("/ttableupl22", upload.single("pdf"), async (req, res) => {
  try {
    const { docname, postby, postmail, postname, sem, subject, department } =
      req.body;

    // Determine department model
    let deptModel;
    if (department === "Civil Engineering") deptModel = civil;
    else if (department === "Computer Science Engineering") deptModel = cse;
    else if (department === "Electronics And Communication Engineering")
      deptModel = ece;
    else if (department === "Electrical And Electronics Engineering")
      deptModel = eee;
    else if (department === "Electronics And Instrumentation Engineering")
      deptModel = eie;
    else if (department === "Industrial Bio Technology") deptModel = ibt;
    else if (department === "Information Technology") deptModel = it;
    else if (department === "Mechanical Engineering") deptModel = mech;
    else if (department === "Production Engineering") deptModel = prod;
    else {
      return res.status(400).json({ error: "Invalid department name" });
    }

    // Create file path
    const filePath = `uploads/reg2022/ttable/${req.file.filename}`;

    // const newPost = {
    //   docurl: filePath,
    //   postby,
    //   postbymail: postmail,
    //   postname,
    //   likes: [],
    //   comment: [],
    //   postdate: new Date(),
    // };

    const newSyllabus = {
      docurl: filePath,
      postby,
      postbymail: postmail,
      postname,
      likes: [],
      comment: [],
      postdate: new Date(),
      view: 0,
      downloadc: 0,
      likec: 0,
    };

    // Push to correct subject in that department model
    const result = await deptModel.updateOne(
      { sem: sem },
      { $set: { timetable: newSyllabus } }
    );

    res
      .status(200)
      .json({ message: "✅ Uploaded and saved successfully", result });
  } catch (err) {
    console.error("❌ Upload failed:", err);
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

module.exports = router;
