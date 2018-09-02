import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { setOrder, setSort, setLimit, setPage } from './MovieListActions';
import { getOrder, getSort, getLimit, getPage } from './MoveListSelectors';
import { getDirectorFilter, getYearFilter } from '../Filter/FilterSelectors';
import {
  getParams, getDirectorsLoading, getMoviesLoading,
  getMovies, getMoviesHasMore,
} from '../App/AppSelectors';

const rows = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Movie' },
  { id: 'directorId', numeric: false, disablePadding: true, label: 'Director' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
];

export class MovieList extends Component {

  createSortHandler = property => event => {
    console.log({ property, event });
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <Fragment>
        <Grid item xs={ 8 }>
          <Paper style={{ padding: '32px' }}>
          <Grid container justify="center">
            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  {rows.map(row => {
                    return (
                      <TableCell
                        key={ row.id }
                        numeric={ row.numeric }
                        padding={ row.disablePadding ? 'none' : 'default' }
                        sortDirection={ orderBy === row.id ? order : false }
                      >
                        <Tooltip
                          title="Sort"
                          placement={ row.numeric ? 'bottom-end' : 'bottom-start' }
                          enterDelay={ 300 }
                        >
                          <TableSortLabel
                            active={ orderBy === row.id }
                            direction={ order }
                            onClick={ this.createSortHandler(row.id) }
                          >
                            { row.label }
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
                    Title
                  </TableCell>
                  <TableCell padding="none">
                    Director
                  </TableCell>
                  <TableCell numeric>
                    2018
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

