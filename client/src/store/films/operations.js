import * as api from '../../api/films';
import actions from './actions';

const requestFilms = () => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.getAllFilms();
    dispatch(actions.uploadAllFilms(response));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const addFilm = (film) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.addFilm(film);
    dispatch(actions.addFilm(response));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const removeFilm = (id) => async (dispatch) => {
  try {
    const response = await api.deleteFilm(id);
    dispatch(actions.removeFilm(response._id));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const uploadFilmsFile = (file) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.uploadFilmsFile(file);
    dispatch(actions.uploadAllFilms(response));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

const getFilmsByParam = (params) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const res = await api.getFilmsByParam(params);
    dispatch(actions.fetchSuccess());
    dispatch(actions.uploadAllFilms(res));
  } catch (error) {
    dispatch(actions.fetchError(error.message));
  }
};

export default {
  requestFilms,
  addFilm,
  removeFilm,
  uploadFilmsFile,
  getFilmsByParam,
};
