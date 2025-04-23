/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TablePagination } from '@mui/material';

const DataTable = ({ data, filters }: any) => {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filterData = data.filter((row: any) => {
    return [
      'country', 'state', 'city', 'sector', 'category'
    ].every((key) => {
      return !filters[key] || row[key] === filters[key];
    });
  });

  const sortedData = [...(filterData || [])].sort((a, b) => {
    if (!orderBy) return 0;
    const aVal = a[orderBy];
    const bVal = b[orderBy];
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
          {['Country', 'State', 'City', 'Sector', 'Category'].map((attr) => (
              <TableCell
                key={attr}
                sortDirection={orderBy === attr.toLowerCase() ? order : false}
              >
                <TableSortLabel
                  active={orderBy === attr.toLowerCase()}
                  direction={orderBy === attr.toLowerCase() ? order : 'asc'}
                  onClick={() => handleSort(attr.toLowerCase())}
                >
                  {attr}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell>My Spend (Current)</TableCell>
            <TableCell>My Spend (Reference)</TableCell>
            <TableCell>Abs Change</TableCell>
            <TableCell>% Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {paginatedData.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.sector}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.mySpend?.current}</TableCell>
              <TableCell>{row.mySpend?.reference}</TableCell>
              <TableCell>{row.mySpend?.absoluteChange}</TableCell>
              <TableCell>{row.mySpend?.percentChange}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </TableContainer>
  );
};

export default DataTable;