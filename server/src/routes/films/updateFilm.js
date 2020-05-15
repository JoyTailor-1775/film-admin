const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');

const updateFilm = (req, res) => {
  const { id, ...updatedFilm } = req.body;

  const sendResponse = (film) => {
    res.status(200);
    res.json({
      status: 'The post is successfully updated',
      data: film,
    });
  };

  Film.findOneAndUpdate({ _id: id }, { $set: updatedFilm }, { new: true })
    .then(sendResponse)
    .catch(sendDbError);
};

module.exports = updateFilm;
