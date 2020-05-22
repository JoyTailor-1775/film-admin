const _addFilm = require('./addFilm');
const _deleteFilm = require('./deleteFilm');
const _updateFilm = require('./updateFilm');
const _getAllFilms = require('./getAllFilms');
const _getAllFilmsByActor = require('./getAllFilmsByActor');
const _getFilmById = require('./getFilmById');
const _importFilmsFromFile = require('./importFilmsFromFile');
const _middlewares = require('./middlewares');

module.exports = {
  addFilm: _addFilm,
  deleteFilm: _deleteFilm,
  updateFilm: _updateFilm,
  getAllFilms: _getAllFilms,
  getAllFilmsByActor: _getAllFilmsByActor,
  importFilmsFromFile: _importFilmsFromFile,
  getFilmById: _getFilmById,
  middlewares: _middlewares,
};
