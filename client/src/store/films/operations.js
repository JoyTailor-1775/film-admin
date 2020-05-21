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
    dispatch(actions.addFilm(film));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.error));
  }
};

const removeFilm = (id) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.removeFilm(id);
    dispatch(actions.removeFilm(id));
    dispatch(actions.fetchSuccess());
  } catch (error) {
    dispatch(actions.fetchError(error.error));
  }
};

const uploadFilmsFile = (file) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await api.uploadFilmsFile(file);
    dispatch(actions.fetchSuccess());
    requestFilms();
  } catch (error) {
    dispatch(actions.fetchError(error.error));
  }
};

export default {
  requestFilms,
  addFilm,
  removeFilm,
  uploadFilmsFile,
};
