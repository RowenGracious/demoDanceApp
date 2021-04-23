import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from '../Pagination/TablePaginationActions'

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

// Pagination using material design 
export default function Pagination({rows}) {
  const classes = useStyles2();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rows && rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Profile Image
            </TableCell>
            <TableCell component="th" scope="row">
              Full Name
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              Age
            </TableCell>
          </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ width: '50%' }}>
                  <img src={row.picture.large} />
                </TableCell>
                <TableCell style={{ width: '25%' }} align="left">
                  {row.name.title} {row.name.first} {row.name.last}
                </TableCell>
                <TableCell style={{ width: '25%' }} align="center">
                  {row.registered.age}
                </TableCell>
              </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}