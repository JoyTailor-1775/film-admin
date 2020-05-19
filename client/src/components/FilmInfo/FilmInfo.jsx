import React from 'react';
import './FilmInfo.scss';

const FilmInfo = ({ film }) => {
  return (
    <div className="film-info">
      <h4 className="film-info__title">Film Info</h4>
      <ul className="film-info__list">
        {film ? (
          <>
            <li className="film-info__list-item">
              <span className="text key">Name :</span>
              <span className="text value">{film.title}</span>
            </li>
            <li className="film-info__list-item">
              <span className="text key">Year :</span>
              <span className="text value">{film.release_year}</span>
            </li>
            <li className="film-info__list-item">
              <span className="text key">Format :</span>
              <span className="text value">{film.format}</span>
            </li>
            <li className="film-info__list-item">
              <span className="text key">Cast :</span>
              <span className="text value">{film.cast.join(', ')}</span>
            </li>
          </>
        ) : (
          <li className="film-info__list-item">Choose a film...</li>
        )}
      </ul>
    </div>
  );
};

export default FilmInfo;
