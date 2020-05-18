const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');

const addFilm = (req, res) => {
  const film = req.body;
  const newFilm = new Film(film);

  const sendResponse = (film) => {
    res.status(200);
    res.json({
      status: 'The film is successfully created',
      data: film,
    });
  };
  newFilm.save().then(sendResponse).catch(sendDbError);
};

module.exports = addFilm;
