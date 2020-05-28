import * as api from '../../api/films';
import actions from './actions';

const requestFilms = (params) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.getAllFilms(params);
    dispatch(actions.uploadAllFilms(response));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.response.data));
  }
};

const addFilm = (film) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    await api.addFilm(film);
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.response.data));
  }
};

const removeFilm = (id) => async (dispatch) => {
  try {
    await api.deleteFilm(id);
  } catch (error) {
    dispatch(actions.fetchError(error.response.data));
  }
};

const uploadFilmsFile = (file) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    await api.uploadFilmsFile(file);
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.response.data));
  }
};

export default {
  requestFilms,
  addFilm,
  removeFilm,
  uploadFilmsFile,
};
