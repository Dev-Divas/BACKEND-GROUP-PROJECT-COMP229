require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function () {
  try {
    await mongoose.connect(process.env.ATLASDB);

    console.log('==== Backend successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};