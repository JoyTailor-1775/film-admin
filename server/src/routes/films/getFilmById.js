const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');

const getFilmById = (req, res) => {
  const id = req.body.id;

  const sendResponse = (film) => {
    res.status(200);
    res.json({
      status: 'Request is successfull',
      data: film,
    });
  };

  Film.getById(id).then(sendResponse).catch(sendDbError);
};

module.exports = getFilmById;
