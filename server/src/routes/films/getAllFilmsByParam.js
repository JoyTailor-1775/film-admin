const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const ALLOWED_PARAMS = Object.freeze({
  title: 'title',
  release_year: 'release_year',
  format: 'format',
  cast: 'cast',
});

const getAllFilmsByActor = (req, res) => {
  const params = req.query;
  const validParams = {};
  for (const key in params) {
    if (ALLOWED_PARAMS[key]) validParams[key] = params[key];
  }

  console.log({ validParams });

  Film.find(validParams)
    .then((data) => sendDbResponse(data, res))
    .catch((err) => sendDbError(err, res));
};

module.exports = getAllFilmsByActor;
