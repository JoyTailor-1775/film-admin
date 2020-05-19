import React from 'react';
import Button from '../Button';
import Spinner from '../Spinner';
/*
  A Table component needs next required parameters to be used:
    1) columns - an array of objects, which represents the properties of 
        the table columns. Each column objects should looks like:
        {
          heading: String,
          dataKey: String,
        }
        heading - is a name of column, that will be displayed in the column head.
        dataKey - is a key, by which the column will get it's values from data prop.
    2) data - an array of objects, a data that will be shown in the table. The
        data won't be shown in the table, unless neccessary dataKeys are provides in 
        columns prop.
    3) onRowClick() - a method, which is called, after click on a certain table row. 
        Returns the row id.
    4) rowKey - any, it's a unique key for every table row, could be anything, since it's 
        uniqueness is assurred.

  The Table also has optional parameters:
    1) loading - boolean (default value = false). Determines wheter to show a loading
        message.
    2) deletable - boolean (default value = false). When setted to true, a Delete
        column is appeared in the table.
    3) onDelete - function (default value = () => ({})). Used with deletable flag.
        A method, which is called whenever a Delete button is clicked on a certain
        row. Returns an id of the clicked row.
*/

const Table = ({
  columns,
  data,
  onRowClick,
  rowKey,
  loading = false,
  deletable = false,
  onDelete = () => ({}),
}) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row table__row--head">
          {columns.map((col, idx) => {
            return (
              <th className="table__heading" key={idx}>
                {col.heading}
              </th>
            );
          })}
          {deletable && (
            <th className="table__heading table__heading--delete">Delete</th>
          )}
        </tr>
      </thead>
      <tbody className="table__body">
        {loading ? (
          <Spinner />
        ) : data.length < 1 ? (
          <p className="table__message">No data</p>
        ) : (
          data.map((obj) => {
            return (
              <tr
                className="table__row"
                key={obj[rowKey]}
                onClick={() => onRowClick(obj[rowKey])}
              >
                {columns.map((col, idx) => {
                  return (
                    <td className="table__cell" key={idx}>
                      {obj[col.dataKey] ? obj[col.dataKey] : ''}
                    </td>
                  );
                })}
                {deletable && (
                  <td className="table__cell table__cell-delete">
                    <Button
                      text="X"
                      color="error"
                      onClick={() => onDelete(obj[rowKey])}
                    />
                  </td>
                )}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default Table;
