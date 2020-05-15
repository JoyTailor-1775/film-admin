const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');

const getAllFilms = (req, res) => {
  const sendResponse = (films) => {
    res.status(200);
    res.json({
      status: 'Request is successfull',
      data: films,
    });
  };
  Film.find().then(sendResponse).catch(sendDbError);
};

module.exports = getAllFilms;
