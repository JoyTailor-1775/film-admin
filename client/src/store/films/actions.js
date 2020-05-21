import types from './actionsTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchError = (error) => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS,
});

const uploadAllFilms = (films) => ({
  type: types.UPLOAD_ALL_FILMS,
  payload: films,
});

const addFilm = (film) => ({
  type: types.ADD_FILM,
  payload: film,
});

const deleteFilm = (id) => ({
  type: types.DELETE_FILM,
  payload: id,
});

const setActiveFilm = (film) => ({
  type: types.SET_ACTIVE_FILM,
  payload: film,
});

const removeActiveFilm = () => ({
  type: types.REMOVE_ACTIVE_FILM,
});

export default {
  fetchRequest,
  fetchError,
  fetchSuccess,
  uploadAllFilms,
  addFilm,
  deleteFilm,
  setActiveFilm,
  removeActiveFilm,
};
