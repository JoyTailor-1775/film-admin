import { combineReducers } from 'redux';
import filmsReducers from './films/reducers';

export default combineReducers({
  films: filmsReducers,
});
