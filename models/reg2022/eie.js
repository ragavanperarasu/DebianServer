const mongoose = require("mongoose");
const reg2025Connection = require("../../database/reg2025");

const commentSchema = new mongoose.Schema({
  commentby: String,
  com: String,
  cdate: {
    type: Date,
    default: Date.now,
  },
});

const postItemSchema = new mongoose.Schema({
  docurl: String,
  postby: String,
  postbymail: String,
  postname: String,
  likes: {
    type: [String],
    default: [],
  },
  comment: [commentSchema],
  postdate: {
    type: Date,
    default: Date.now,
  },
  view: {
    type: Number,
    default: 0,
  },
  downloadc: {
    type: Number,
    default: 0,
  },
  likec: {
    type: Number,
    default: 0,
  }
});


const subjectSchema = new mongoose.Schema({
  subname: String,
  semqus: [postItemSchema],
  utoqus: [postItemSchema],
  uttqus: [postItemSchema],
  stunote: [postItemSchema],
  books: [postItemSchema],
});

const eie = reg2025Connection.model(
  "eie",
  new mongoose.Schema({
    sem: String,
    sub: [subjectSchema],
    syllabus: {
      docurl: String,
      postby: String,
      postbymail: String,
      postname: String,
      likes: {
        type: [String],
        default: [],
      },
      comment: [commentSchema],
      postdate: {
        type: Date,
        default: Date.now,
      },
      view: {
        type: Number,
        default: 0,
      },
      downloadc: {
        type: Number,
        default: 0,
      },
      likec: {
        type: Number,
        default: 0,
      }
    },
    timetable: {
      docurl: String,
      postby: String,
      postbymail: String,
      postname: String,
      likes: {
        type: [String],
        default: [],
      },
      comment: [commentSchema],
      postdate: {
        type: Date,
        default: Date.now,
      },
      view: {
        type: Number,
        default: 0,
      },
      downloadc: {
        type: Number,
        default: 0,
      },
      likec: {
        type: Number,
        default: 0,
      }
    },
  })
);

module.exports = eie;
