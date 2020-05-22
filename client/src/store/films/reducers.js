import { combineReducers } from 'redux';
import types from './actionTypes';

const INITIAL_FILM_STATE = Object.freeze({
  _id: '',
  title: '',
  release_year: '',
  format: '',
  cast: [],
});

function filmsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.UPLOAD_ALL_FILMS:
      return [...payload];
    case types.REMOVE_FILM:
      return state.filter((el) => el._id !== payload);
    case types.ADD_FILM:
      return [payload, ...state];
    default:
      return state;
  }
}

function activeFilmReducer(state = INITIAL_FILM_STATE, { type, payload }) {
  switch (type) {
    case types.SET_ACTIVE_FILM:
      return payload;
    case types.REMOVE_ACTIVE_FILM:
      return INITIAL_FILM_STATE;
    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  films: filmsReducer,
  activeFilm: activeFilmReducer,
});
