import React from 'react';
import './App.scss';
import FilmsPanel from './components/FilmsPanel';
import FilmInfo from './components/FilmInfo';

const filmObj = {
  title: 'Cloud Atlas',
  release_year: 2012,
  format: 'Blu Ray',
  cast: ['Tom Hanks', 'Calle Berry', 'Jim Broadbent', 'Hugo Weaving'],
};

function App() {
  return (
    <main className="app">
      <h1 className="app__title">Films admin panel</h1>
      <div className="app-content__wrapper">
        <section className="app-content__section">
          <FilmsPanel />
        </section>
        <section className="app-content__section">
          <FilmInfo film={filmObj} />
        </section>
      </div>
    </main>
  );
}

export default App;
