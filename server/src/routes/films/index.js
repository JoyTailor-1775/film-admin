const _addFilm = require('./addFilm');
const _deleteFilm = require('./deleteFilm');
const _editFilm = require('./editFilm');
const _getAllFilms = require('./getAllFilms');
const _getFilmById = require('./getFilmById');
const _importFilmsFromFile = require('./importFilmsFromFile');
const _middlewares = require('./middlewares');

module.exports = {
  addFilm: _addFilm,
  deleteFilm: _deleteFilm,
  editFilm: _editFilm,
  getAllFilms: _getAllFilms,
  importFilmsFromFile: _importFilmsFromFile,
  getFilmById: _getFilmById,
  middlewares: _middlewares,
};
