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
  asc: 1,
  desc: -1,
});

const getAllFilms = (req, res) => {
  const query = req.query;

  const pageSize = query.pageSize ? Number(query.pageSize) : 10;
  const pageNumber = query.pageNumber ? Number(query.pageNumber) : 1;

  // Processing request with special filters, of number of the
  // model fields.
  const requestFilters = {};
  if (req.query.filters) {
    const parsedFilters = JSON.parse(req.query.filters);
    for (const key in parsedFilters) {
      if (FILTERABLE_PARAMS[key])
        requestFilters[key] = {
          $regex: parsedFilters[key],
          $options: 'i',
        };
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
    const parsedParams = JSON.parse(query.sortParams);
    for (const param in parsedParams) {
      if (SORTABLE_PARAMS[param]) {
        requestSortParams[`_normalized_${param}`] =
          SORTING_ORDERS[parsedParams[param]] || 1;
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
      Film.countDocuments(requestFilters).exec((countError, count) => {
        if (err) {
          sendDbError(countError, res);
          return;
        }
        sendDbResponse(
          {
            total: count,
            pageNumber: pageNumber,
            pageSize: pageSize,
            data: doc,
          },
          res
        );
      });
    });
};

module.exports = getAllFilms;
