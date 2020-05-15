const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const timestamp = require('../middlewares/timestamp');

const filmSchema = new Schema({
  title: String,
  release_year: String,
  format: String,
  cast: [String],
});

filmSchema.plugin(timestamp);

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
