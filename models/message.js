const mongoose = require('mongoose'); 
const gctuserConnection = require('../database/gctuser'); 


const messageSchema = new mongoose.Schema({
  text: String,
  filepath: String,
  mime: String, 
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '4d',
  },
  likes: {
    type: [String],
    default: [],
  },
  likec: {
    type: Number,
    default: 0,
  }
});



const MessageModel = gctuserConnection.model('message', messageSchema);

module.exports = MessageModel;
