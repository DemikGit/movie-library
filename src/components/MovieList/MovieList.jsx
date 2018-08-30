import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

export class MovieList extends Component {

  createSortHandler = property => event => {
    console.log({ property, event });
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <Fragment>
        <Grid item xs={ 6 }>
          <Paper style={{ padding: '32px' }}>
          <Grid container justify="center">
            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  {rows.map(row => {
                    return (
                      <TableCell
                        key={row.id}
                        numeric={row.numeric}
                        padding={row.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === row.id ? order : false}
                      >
                        <Tooltip
                          title="Sort"
                          placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                          enterDelay={300}
                        >
                          <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={this.createSortHandler(row.id)}
                          >
                            {row.label}
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
                    );
                  }, this)}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  hover
                  tabIndex={-1}
                >
                  <TableCell component="th" scope="row" padding="none">
                    "Name"
                  </TableCell>
                  <TableCell numeric>
                    12312
                  </TableCell>
                  <TableCell numeric>
                    123
                  </TableCell>
                  <TableCell numeric>
                    124
                  </TableCell>
                  <TableCell numeric>
                    12412
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

