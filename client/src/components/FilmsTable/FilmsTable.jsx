import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../common/Table';
import { filmsActions, filmsOperations } from '../../store/films';
class FilmsTable extends Component {
  async componentDidMount() {
    await this.props.requestFilms(this.props.filmRequest);
  }

  onRowClick = (id) => {
    const film = this.props.films.data.find((el) => el._id === id);
    this.props.setActiveFilm(film);
  };

  onRowDelete = async (id) => {
    if (this.props.activeFilm._id === id) {
      this.props.removeActiveFilm();
    }
    await this.props.removeFilm(id);
    await this.props.requestFilms(this.props.filmRequest);
  };

  sortTitle = async ({ dataKey, order }) => {
    this.props.setRequestParam({
      sortParams: {
        [dataKey]: order,
      },
    });
    await this.props.requestFilms(this.props.filmRequest);
  };

  onPageChange = async (direction) => {
    this.props.setRequestParam({
      pageNumber:
        direction === 'asc'
          ? this.props.films.pageNumber + 1
          : this.props.films.pageNumber - 1,
    });
    await this.props.requestFilms(this.props.filmRequest);
  };

  render() {
    const tableColumns = [
      {
        heading: 'Title',
        dataKey: 'title',
        width: '110px',
        sortable: true,
        sortFunc: this.sortTitle,
      },
      { heading: 'Year', dataKey: 'release_year', width: '100px' },
      { heading: 'Format', dataKey: 'format', width: '100px' },
      { heading: 'Cast', dataKey: 'cast', width: '190px' },
    ];

    const formattedTableData = this.props.films.data
      ? this.props.films.data.map((el) => {
          return {
            ...el,
            cast: el.cast.join(', '),
          };
        })
      : [];

    return (
      <Table
        columns={tableColumns}
        rowKey="_id"
        data={formattedTableData}
        onRowClick={this.onRowClick}
        deletable={true}
        onDelete={this.onRowDelete}
        loading={this.props.loading}
        pagination={true}
        page={this.props.films.pageNumber}
        totalPages={Math.ceil(this.props.films.total / this.props.films.pageSize)}
        onPageChange={this.onPageChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films.films,
  activeFilm: state.films.activeFilm,
  loading: state.films.loading,
  filmRequest: state.films.filmRequest,
});

const MapDispatchToProps = {
  requestFilms: filmsOperations.requestFilms,
  removeFilm: filmsOperations.removeFilm,
  setActiveFilm: filmsActions.setActiveFilm,
  removeActiveFilm: filmsActions.removeActiveFilm,
  uploadAllFilms: filmsActions.uploadAllFilms,
  setRequestParam: filmsActions.setRequestParam,
};

export default connect(mapStateToProps, MapDispatchToProps)(FilmsTable);
