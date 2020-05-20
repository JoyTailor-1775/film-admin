import React, { Component } from 'react';
import Table from '../common/Table';
import ControlPanel from '../ControlPanel';
import Button from '../common/Button';
import FileUploadPanel from '../FileUploadPanel';
import AddFilmModal from '../AddFilmModal';

const testData = [
  {
    _id: 0,
    title: 'Some Title',
    release_year: 2012,
    format: 'DVD',
    cast: ['Brad Pitt', 'Johny Cash'],
  },
  {
    _id: 1,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
  {
    _id: 2,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
  {
    _id: 3,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
  {
    _id: 4,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
  {
    _id: 5,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
  {
    _id: 6,
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
  },
];

export default class FilmsPanel extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = (e) => {
    this.setState({ visible: false });
  };

  onAddNewFilm = () => {
    this.showModal();
  };

  onRowClick = (id) => {
    console.log('The next row is clicked', id);
  };

  onRowDelete = (id) => {
    console.log('The next row is should be deleted', id);
  };

  render() {
    const tableColumns = [
      { heading: 'Title', dataKey: 'title', width: '100px' },
      { heading: 'Year', dataKey: 'release_year', width: '100px' },
      { heading: 'Format', dataKey: 'format', width: '100px' },
      { heading: 'Cast', dataKey: 'cast', width: '190px' },
    ];

    const formattedTableData = testData.map((el) => {
      return {
        ...el,
        cast: el.cast.join(', '),
      };
    });

    return (
      <div className="films-table">
        <ControlPanel
          title="Films List"
          actionsButtons={
            <Button
              text="Add New"
              size="large"
              color="action"
              onClick={this.onAddNewFilm}
            />
          }
        />
        <Table
          columns={tableColumns}
          rowKey="_id"
          data={formattedTableData}
          onRowClick={this.onRowClick}
          deletable={true}
          onRowDelete={this.onRowDelete}
        />
        <FileUploadPanel />
        <AddFilmModal visible={this.state.visible} onModalClose={this.closeModal} />
      </div>
    );
  }
}
