import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

export const getAllFilms = async (params) => {
  const DEFAUL_REQUEST = Object.freeze({
    pageNumber: 1,
    pageSize: 10,
    filters: {},
  });
  const res = await axios.get('/films', {
    ...DEFAUL_REQUEST,
    ...params,
  });
  return res.data.data;
};

export const addFilm = async (film) => {
  const res = await axios.post('/films-add', film);
  return res.data.data;
};

export const deleteFilm = async (id) => {
  const res = await axios.post('/films-delete', { id: id });
  return res.data.data;
};

export const uploadFilmsFile = async (data) => {
  const res = await axios.post('/films-import', data);
  return res.data.data;
};

export const getFilmsByParam = async (params) => {
  const res = await axios.get('/films-by-param', {
    params: params,
  });
  return res.data.data;
};
