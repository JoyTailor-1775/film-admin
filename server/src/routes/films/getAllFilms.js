const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const ALLOWED_PARAMS = Object.freeze({
  title: 'title',
  release_year: 'release_year',
  format: 'format',
  cast: 'cast',
});

const getAllFilms = (req, res) => {
  const query = req.query;

  const pageSize = query.pageSize ? query.pageSize : 10;
  const pageNumber = query.pageNumber ? query.pageNumber : 1;

  // Processing request with special filters, of number of the
  // model fields.
  const filters = req.query.filters;
  const requestFilters = {};
  if (filters) {
    for (const key in filters) {
      if (ALLOWED_PARAMS[key]) requestFilters[key] = filters[key];
    }
  }

  Film.find(requestFilters)
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
