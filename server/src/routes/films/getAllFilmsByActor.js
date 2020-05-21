const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const getAllFilmsByActor = (req, res) => {
  const actor = req.body.actor;
  console.log(actor);
  Film.find({ cast: actor })
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = getAllFilmsByActor;
