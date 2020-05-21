const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const deleteFilm = (req, res) => {
  const id = req.body.id;
  Film.findOneAndDelete({ _id: id })
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = deleteFilm;
