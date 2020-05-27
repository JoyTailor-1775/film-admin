const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const timestamp = require('../middlewares/timestamp');

const filmSchema = new Schema({
  title: String,
  release_year: String,
  format: String,
  cast: [String],
});

filmSchema.index(
  { title: 1, release_year: 1, format: 1, cast: 1 },
  { unique: true }
);
filmSchema.plugin(timestamp);

const Film = mongoose.model('Film', filmSchema);

Film.on('index', function (err) {
  if (err) {
    console.error('Film index error: %s', err);
  } else {
    console.info('Film indexing complete');
  }
});
Film.createIndexes();

module.exports = Film;
