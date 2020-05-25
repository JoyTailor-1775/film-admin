import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import FilmsPanel from './components/FilmsPanel';
import FilmInfo from './components/FilmInfo';

const App = ({ activeFilm }) => {
  return (
    <main className="app">
      <h1 className="app__title">Films admin panel</h1>
      <div className="app-content__wrapper">
        <section className="app-content__section">
          <FilmsPanel />
        </section>
        <section className="app-content__section">
          <FilmInfo film={activeFilm} />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = function (state) {
  return {
    activeFilm: state.films.activeFilm,
  };
};

export default connect(mapStateToProps)(App);
