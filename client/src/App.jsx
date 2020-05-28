import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import FilmsPanel from './components/FilmsPanel';
import FilmInfo from './components/FilmInfo';
import PushNotification from './components/common/PushNotification';

const App = ({ activeFilm, error }) => {
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
      <PushNotification err={error} msg={error && error.status} type="error" />
    </main>
  );
};

const mapStateToProps = function (state) {
  return {
    activeFilm: state.films.activeFilm,
    error: state.films.error,
  };
};

export default connect(mapStateToProps)(App);
