import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../common/Table';
import sortStrings from '../../helpers/sortStrings';
import { filmsActions, filmsOperations } from '../../store/films';
class FilmsTable extends Component {
  async componentDidMount() {
    await this.props.requestFilms();
  }

  onRowClick = (id) => {
    const film = this.props.films.find((el) => el._id === id);
    this.props.setActiveFilm(film);
  };

  onRowDelete = (id) => {
    if (this.props.activeFilm._id === id) {
      this.props.removeActiveFilm();
    }
    this.props.removeFilm(id);
  };

  sortTitle = ({ dataKey, order }) => {
    if (order === 'asc') {
      const sortedData = sortStrings(this.state.tableData, dataKey);
      this.setState({
        tableData: sortedData,
      });
    } else if (order === 'desc') {
      const sortedData = sortStrings(this.state.tableData, dataKey).reverse();
      this.setState({
        tableData: sortedData,
      });
    }
  };

  render() {
    const tableColumns = [
      {
        heading: 'Title',
        dataKey: 'title',
        width: '100px',
        sortable: true,
        sortFunc: this.sortTitle,
      },
      { heading: 'Year', dataKey: 'release_year', width: '100px' },
      { heading: 'Format', dataKey: 'format', width: '100px' },
      { heading: 'Cast', dataKey: 'cast', width: '190px' },
    ];

    const formattedTableData = this.props.films.map((el) => {
      return {
        ...el,
        cast: el.cast.join(', '),
      };
    });

    return (
      <Table
        columns={tableColumns}
        rowKey="_id"
        data={formattedTableData}
        onRowClick={this.onRowClick}
        deletable={true}
        onDelete={this.onRowDelete}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films.films,
  activeFilm: state.films.activeFilm,
});

const MapDispatchToProps = {
  requestFilms: filmsOperations.requestFilms,
  removeFilm: filmsOperations.removeFilm,
  setActiveFilm: filmsActions.setActiveFilm,
  removeActiveFilm: filmsActions.removeActiveFilm,
};

export default connect(mapStateToProps, MapDispatchToProps)(FilmsTable);
