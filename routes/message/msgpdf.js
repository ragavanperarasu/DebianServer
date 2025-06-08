const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const MessageModel = require("../../models/message");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/msg");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post("/msgupl", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const { timestamp } = req.body;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const message = await MessageModel.create({
      text: file.originalname,
      filepath: `uploads/msg/${file.filename}`,
      mime: file.mimetype,
    });
    res.send("done");
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
