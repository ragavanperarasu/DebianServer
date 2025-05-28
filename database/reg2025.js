require('dotenv').config();
const mongoose = require('mongoose');

const reg2022URI = process.env.REG2022URI;

const reg2022Connection = mongoose.createConnection(reg2022URI);

reg2022Connection.on('connected', () => {
  console.log('✅ MongoDB reg2022 DB connected successfully');
});

reg2022Connection.on('error', (err) => {
  console.error('❌ MongoDB reg2022 DB connection error:', err);
});

reg2022Connection.on('disconnected', () => {
  console.log('⚠️ MongoDB reg2022 DB disconnected');
});

module.exports = reg2022Connection;
