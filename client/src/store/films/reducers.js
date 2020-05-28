import { combineReducers } from 'redux';
import types from './actionTypes';

const INITIAL_FILM_STATE = Object.freeze({
  _id: '',
  title: '',
  release_year: '',
  format: '',
  cast: [],
});

function filmsReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.UPLOAD_ALL_FILMS:
      return { ...payload };
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

const INITIAL_REQUEST = {
  pageNumber: 1,
  pageSize: 10,
};

function filmRequestReducer(state = INITIAL_REQUEST, { type, payload }) {
  switch (type) {
    case types.SET_FILM_REQUEST_PARAM:
      return Object.assign(INITIAL_REQUEST, payload);
    default:
      return INITIAL_REQUEST;
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
  filmRequest: filmRequestReducer,
});
