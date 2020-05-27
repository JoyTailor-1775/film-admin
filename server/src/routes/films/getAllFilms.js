const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const getAllFilms = (req, res) => {
  const params = req.query;
  const pageSize = params.pageSize ? params.pageSize : 10;
  const pageNumber = params.pageNumber ? params.pageNumber : 1;
  console.log((pageNumber - 1) * pageSize);
  console.log(pageSize);

  Film.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .exec((err, doc) => {
      if (err) {
        sendDbError(err, res);
        return;
      }
      Film.countDocuments({}).exec((countError, count) => {
        if (err) {
          sendDbError(countError, res);
          return;
        }
        sendDbResponse(
          {
            total: count,
            page: pageNumber,
            pageSize: doc.length,
            data: doc,
          },
          res
        );
      });
    });
};

module.exports = getAllFilms;
