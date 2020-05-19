import React from 'react';

const FilmInfo = ({ film }) => {
  return (
    <div className="film-info">
      <h4 className="film-info__title">Film Info</h4>
      <ul className="film-info__props-list">
        {film ? (
          Object.keys(film).map((key, idx) => {
            return (
              <li className="film-info__props-list-item" key={idx}>
                {film[key]}
              </li>
            );
          })
        ) : (
          <li className="film-info__props-list-item">Choose a film...</li>
        )}
      </ul>
    </div>
  );
};

export default FilmInfo;
