import React, { Component } from 'react';
import Table from '../common/Table';
import sortStrings from '../../helpers/sortStrings';

export default class FilmsTable extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [
        {
          _id: 0,
          title: 'Aome Title',
          release_year: 2012,
          format: 'DVD',
          cast: ['Brad Pitt', 'Johny Cash'],
        },
        {
          _id: 1,
          title: 'Bulp Fiction',
          release_year: 1999,
          format: 'DVD',
          cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
        },
        {
          _id: 2,
          title: 'Zulp Fiction',
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
          title: 'Lulp Fiction',
          release_year: 1999,
          format: 'DVD',
          cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
        },
        {
          _id: 6,
          title: 'Fulp Fiction',
          release_year: 1999,
          format: 'DVD',
          cast: ['John Travolta', 'Tarantino', 'Jennifer Lawrence'],
        },
      ],
    };
  }
  onRowClick = (id) => {
    console.log('The next row is clicked', id);
  };

  onRowDelete = (id) => {
    console.log('The next row is should be deleted', id);
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

    const formattedTableData = this.state.tableData.map((el) => {
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
        onRowDelete={this.onRowDelete}
      />
    );
  }
}
