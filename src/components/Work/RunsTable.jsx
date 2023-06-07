import React from 'react';
import { useMemo } from 'react';
import { useTable } from 'react-table';

const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const hours = h > 0 ? `${h}:` : '';
    const minutes = m < 10 ? `0${m}` : m;
    const secs = s < 10 ? `0${s}` : s;

    return `${hours}${minutes}:${secs}`;
};


function RunsTable({ runs }) {
    
  const data = useMemo(() => runs, [runs]);

  const columns = useMemo(
    () => [
    {
        Header: 'Date',
        accessor: 'start_date_local',
        Cell: ({ value }) => {
            const date = new Date(value);
            return date.toLocaleDateString();
        }
        },
        {
            Header: 'Distance (km)',
            accessor: 'distance',
            Cell: ({ value }) => {
                return (value / 1000).toFixed(1);
            }
        },
        
      {
        Header: 'Time',
        accessor: 'moving_time',
        Cell: ({ value }) => formatTime(value)
      },
      {
        Header: 'Pace (min/km)',
        accessor: 'pace',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table 
    className='table'
    {...getTableProps()} style={{ margin: '0 auto' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RunsTable;
