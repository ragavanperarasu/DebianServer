const mongoose = require('mongoose');

const gctuserURI = 'mongodb://gctuser_admin:securepass123@15.235.192.50:27017/gctuser';

const gctuserConnection = mongoose.createConnection(gctuserURI);

gctuserConnection.on('connected', () => {
  console.log('✅ MongoDB gctuser DB connected successfully');
});

gctuserConnection.on('error', (err) => {
  console.error('❌ MongoDB gctuser DB connection error:', err);
});

gctuserConnection.on('disconnected', () => {
  console.log('⚠️ MongoDB gctuser DB disconnected');
});

module.exports = gctuserConnection;

