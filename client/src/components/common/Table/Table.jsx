import React from 'react';
import Button from '../Button';

const Table = ({
  headings,
  data,
  onRowClick,
  deletable = false,
  onDelete = () => ({}),
}) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row table__row--head">
          {headings.map((el) => {
            return <th className="table__heading"> {el}</th>;
          })}
          {deletable && (
            <th className="table__heading table__heading--delete">Delete</th>
          )}
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((row) => {
          return (
            <tr className="table__row" onClick={onRowClick(row)}>
              {Object.values(row).map((cell) => {
                return <td className="table__cell">{cell}</td>;
              })}
              {deltebale && (
                <td className="table__cell table__cell-delete">
                  <Button text="X" color="error" onClick={onDelete} />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
