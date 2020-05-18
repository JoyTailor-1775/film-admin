const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const updateFilm = (req, res) => {
  const { id, ...updatedFilm } = req.body;

  Film.findOneAndUpdate({ _id: id }, { $set: updatedFilm }, { new: true })
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = updateFilm;
