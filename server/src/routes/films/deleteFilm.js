const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');

const deleteFilm = (req, res) => {
  const id = req.body.id;

  const sendResponse = (film) => {
    res.status(200);
    res.json({
      status: 'The post is successfully deleted',
      data: film,
    });
  };

  Film.findOneAndDelete({ _id: id }).then(sendResponse).catch(sendDbError);
};

module.exports = deleteFilm;
