const mongoose = require('mongoose');

const connectToDb = (dbUrl) => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('Database connection is succesfull');
    })
    .catch((error) => {
      console.error(`Database connection error! Error type: ${error}`);
    });
};

module.exports = connectToDb;
