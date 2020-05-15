const express = require('express');
const films = require('./films');

const apiRoutes = express.Router();

apiRoutes.get('/films/:id', films.getFilmById);
apiRoutes.post('/films-edit', films.updateFilm);
apiRoutes.post('/films-add', films.middlewares.addFilm, films.addFilm);
apiRoutes.post('/films-delete', films.deleteFilm);
apiRoutes.post('/films-import', films.importFilmsFromFile);
apiRoutes.get('/films', films.getAllFilms);

module.exports = apiRoutes;
