import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

export const getAllFilms = async () => {
  const res = await axios.get('/films');
  return res.data;
};

export const addFilm = async (film) => {
  const res = await axios.post('/films-add', film);
  return res.data;
};

export const deleteFilm = async (id) => {
  const res = await axios.post('/films-delete', { id: id });
  return res.data;
};

export const uploadFilmsFile = async (file) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const res = await axios.post('/films-import', file, config);
  return res.data;
};
