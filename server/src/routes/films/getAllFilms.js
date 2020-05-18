const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const getAllFilms = (req, res) => {
  Film.find()
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = getAllFilms;
