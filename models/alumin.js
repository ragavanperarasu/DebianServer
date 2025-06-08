const mongoose = require('mongoose'); 
const gctuserConnection = require('../database/gctuser'); 



const aluminSchema = new mongoose.Schema({
    id: String,
    name: String,
    linkedin: String,
    ipath: String

});



const AluminModel = gctuserConnection.model('Alumin', aluminSchema);

module.exports = AluminModel;
