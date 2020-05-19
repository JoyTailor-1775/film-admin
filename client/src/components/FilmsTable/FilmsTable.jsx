import React, { Component } from 'react';
import Table from '../common/Table';
import ControlPanel from '../common/ControlPanel';
import Button from '../common/Button';

const testData = [
  {
    _id: '0',
    title: 'Some Title',
    release_year: 2012,
    format: 'DVD',
    cast: ['Brad Pitt', 'Johny Cash'],
  },
  {
    _id: '1',
    title: 'Pulp Fiction',
    release_year: 1999,
    format: 'DVD',
    cast: ['John Travolta', 'Tarantino'],
  },
];

export default class FilmsTable extends Component {
  onAddNewFilm() {
    console.log('Add new film');
  }

  onRowClick(id) {
    console.log('The next row is clicked', id);
  }

  onRowDelete(id) {
    console.log('The next row is should be deleted', id);
  }

  render() {
    const tableColumns = [
      { heading: 'Name', dataKey: 'title' },
      { heading: 'Year', dataKey: 'release_year' },
      { heading: 'Format', dataKey: 'format' },
      { heading: 'Cast', dataKey: 'cast' },
    ];

    const formattedTableData = testData.map((el) => {
      return {
        ...el,
        cast: el.cast.join(' '),
      };
    });

    return (
      <div className="films-table">
        <ControlPanel
          title="Films List"
          actionsButtons={
            <Button
              text="Add New"
              size="medium"
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
      </div>
    );
  }
}
