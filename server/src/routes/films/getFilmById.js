const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const getFilmById = (req, res) => {
  const id = req.body.id;

  Film.findById(id)
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = getFilmById;
