import React, { Component } from 'react';
import './App.scss';
import FilmsPanel from './components/FilmsPanel';
import FilmInfo from './components/FilmInfo';
import * as api from './api/films';

const filmObj = {
  title: 'Cloud Atlas',
  release_year: 2012,
  format: 'Blu Ray',
  cast: ['Tom Hanks', 'Calle Berry', 'Jim Broadbent', 'Hugo Weaving'],
};

export default class App extends Component {
  async componentDidMount() {
    const films = await api.deleteFilm({ id: '5ec6611daee48d6575a99ca4' });
    console.log(films);
  }
  render() {
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
}
