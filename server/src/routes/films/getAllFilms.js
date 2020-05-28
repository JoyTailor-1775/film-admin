const Film = require('../../modules/db/schemas/filmSchema');
const sendDbError = require('../../globals/sendDbError');
const sendDbResponse = require('../../globals/sendDbResponse');

const FILTERABLE_PARAMS = Object.freeze({
  title: 'title',
  cast: 'cast',
});

const SORTABLE_PARAMS = Object.freeze({
  title: 'title',
});

const SORTING_ORDERS = Object.freeze({
  asc: 'asc',
  desc: 'desc',
});

const getAllFilms = (req, res) => {
  const query = req.query;

  const pageSize = query.pageSize || 10;
  const pageNumber = query.pageNumber || 1;

  // Processing request with special filters, of number of the
  // model fields.
  const filters = req.query.filters;
  const requestFilters = {};
  if (filters) {
    for (const key in filters) {
      if (FILTERABLE_PARAMS[key])
        requestFilters[key] = `_normalized_${filters[key]}`;
    }
  }

  /*
  Setting up sorting options with setting default
  and safe values in case of unexpected params have
  been passed. If there is a field, which is not accepted by
  the route - nothing is added to the requestSortParams, 
  if something unexpected has been passed as sorting param
  to a valid field - 'asc' param is set by default.
  */

  const requestSortParams = {};
  if (query.sortParams) {
    for (const param in query.sortParams) {
      if (SORTABLE_PARAMS[param]) {
        requestSortParams[param] =
          SORTING_ORDERS[query.sortParams[param]] || 'asc';
      }
    }
  }

  Film.find(requestFilters)
    .sort(requestSortParams)
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
