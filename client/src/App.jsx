import React from 'react';
import './App.scss';
import FilmsTable from './components/FilmsTable';
import FileUploadPanel from './components/FileUploadPanel';
import FilmInfo from './components/FilmInfo';

function App() {
  return (
    <main className="app">
      <h1 className="app__title">Films admin panel</h1>
      <div className="app-content__wrapper">
        <section className="app-content__section--left">
          <FilmsTable />
          <FileUploadPanel />
        </section>
        <section className="app-content__section--right">
          <FilmInfo />
        </section>
      </div>
    </main>
  );
}

export default App;
