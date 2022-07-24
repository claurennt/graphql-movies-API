const mongoose = require('mongoose');

const { MONGODB_CONNECTION_STRING } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const connection = mongoose
  .connect(MONGODB_CONNECTION_STRING, options)
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((error) => {
    throw error;
  });

module.exports = connection;
