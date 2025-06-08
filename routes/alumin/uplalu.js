const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AluminModel = require("../../models/alumin");

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/alumin");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName); // this name will be stored and used
  },
});

const upload = multer({ storage });

router.post("/uplalu", upload.single("file"), async (req, res) => {
  try {
    const { aname, alinkedin } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "❌ No file uploaded" });
    }

    // Save to DB with the exact filename stored locally
    const result = await AluminModel.create({
      name: aname,
      linkedin: alinkedin,
      ipath: `uploads/alumin/${file.filename}`,
    });

    res.status(200).json({
      message: "✅ Uploaded and saved successfully",
      file: file.filename,
      result,
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).send("❌ Upload failed");
  }
});

module.exports = router;
