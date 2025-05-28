const mongoose = require('mongoose'); 
const gctuserConnection = require('../database/gctuser'); 

const fourYearsInSeconds = 4 * 365 * 24 * 60 * 60; 

const userSchema = new mongoose.Schema({
  name: String,
  regno: String,
  gender: String,
  dept: String,
  mail: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: fourYearsInSeconds 
  }
});


const UserModel = gctuserConnection.model('User', userSchema);

module.exports = UserModel;
