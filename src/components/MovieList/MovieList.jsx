import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { setOrder, setSort, setLimit, setPage } from './MovieListActions';
import { getOrder, getSort, getLimit, getPage } from './MoveListSelectors';
import { getDirectorFilter, getYearFilter } from '../Filter/FilterSelectors';
import {
  getParams, getDirectorsLoading, getMoviesLoading,
  getMovies, getMoviesHasMore,
} from '../App/AppSelectors';

import { loadMovies, loadMoviesPage } from '../App/AppActions';

import {
  Grid, Paper, Table,
  TableBody, TableCell, TableHead,
  TableRow, InputLabel, FormControl,
  Select, TableSortLabel, MenuItem,
  Tooltip, CircularProgress
} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';

const rows = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Movie' },
  { id: 'directorId', numeric: false, disablePadding: true, label: 'Director' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
];

class MovieListComponent extends Component {

  state = {
    hasMore: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      limit, sort, order,
      yearFilter, directorFilter, page,
      onFetchMovies, movieQueryParams, directorsLoading,
      onFetchMoviesPage
    } = this.props;

    if (
      (prevProps.limit !== limit) ||
      (prevProps.sort !== sort) ||
      (prevProps.order !== order) ||
      (prevProps.yearFilter !== yearFilter) ||
      (prevProps.directorFilter !== directorFilter)
    ) {
      onFetchMovies({ ...movieQueryParams, page: 1 });
    }

    if (
      prevProps.directorsLoading.isLoading &&
      !directorsLoading.isLoading &&
      directorsLoading.success
    ) {
      onFetchMovies ({...movieQueryParams, page: 1 });
    }

    if (
      prevProps.page !== page && page !== 1
    ) {
      onFetchMoviesPage(movieQueryParams);
    }
  }

  handleChange = (event, name) => {
    const capitalizeName = name.replace(/\b\w/g, l => l.toUpperCase());

    this.props[`onChange${capitalizeName}`](event.target.value);
  }

  renderTableHead = () => {
    const { order, sort } = this.props;

    return (
      <TableHead>
        <TableRow key={ `uniq-movie-key-head` } >
          {
            rows.map(row => {
              return (
                <TableCell
                  key={ row.id }
                  numeric={ row.numeric }
                  padding={ row.disablePadding ? 'none' : 'default' }
                  sortDirection={ sort === row.id ? order : false }
                >
                {
                  row.id !== 'directorId' ?
                    <Tooltip
                      title="Sort"
                      placement={ row.numeric ? 'bottom-end' : 'bottom-start' }
                      enterDelay={ 300 }
                    >
                      <TableSortLabel
                        active={ sort === row.id }
                        direction={ order }
                        onClick={ this.createSortHandler(row.id) }
                      >
                        { row.label }
                      </TableSortLabel>
                    </Tooltip>
                    :
                    row.label
                }
                </TableCell>
              );
            }, this)
          }
        </TableRow>
      </TableHead>
    );
  }

  onLoadMovies = () => {
    const { onChangePage, page } = this.props;
      onChangePage(page + 1);
  }

  renderTableBody = () => {
    const { movies } = this.props;
    return (
      <TableBody>
        {
          movies.map((movie) => {
            return (
              <TableRow
                hover
                tabIndex={-1}
                key={ `uniq-movie-key-${movie.id}` }
              >
                <TableCell component="th" scope="row" padding="none">
                  { movie.title }
                </TableCell>
                <TableCell padding="none">
                  { movie.director }
                </TableCell>
                <TableCell numeric>
                { movie.year }
                </TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    );
  }

  render() {
    const { limit, moviesLoading, moviesHasMore } = this.props;

    return (
      <Fragment>
        <Grid item xs={ 8 }>
          <Paper style={{ padding: '32px' }}>
          <Grid container justify="flex-end">
            <FormControl style={{ width: '150px' }}>
              <InputLabel htmlFor="movies-limit">Rows per page:</InputLabel>
              <Select
                inputProps={{
                  name: 'movies-limit',
                  id: 'movies-limit',
                }}
                value={ limit }
                onChange={(event) => { this.handleChange(event, 'limit') }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
          </FormControl>
            <InfiniteScroll
              pageStart={ 1 }
              loadMore={ this.onLoadMovies }
              hasMore={ moviesHasMore && !moviesLoading.isLoading && moviesLoading.success}
              style={{ width: '100%' }}
            >
              <Table aria-labelledby="tableTitle">
                { this.renderTableHead() }
                { this.renderTableBody() }
              </Table>
            </InfiniteScroll>
            {
              moviesLoading.isLoading && (
                <CircularProgress
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '24px'
                  }}
                />
              )
            }
          </Grid>
          </Paper>
        </Grid>
      </Fragment>
    );
  }

  createSortHandler = property => event => {
    const {
      order, sort, onChangeOrder, onChangeSort
    } = this.props;

    const newSort = property;
    let newOrder = 'desc';

    if (sort === property && order === 'desc') {
      newOrder = 'asc';
    }

    onChangeOrder(newOrder);
    onChangeSort(newSort);
  };
}

const mapDispatchToProps = (dispatch) => ({
  onChangeLimit: (value) => dispatch(setLimit(value)),
  onChangeSort: (value) => dispatch(setSort(value)),
  onChangeOrder: (value) => dispatch(setOrder(value)),
  onChangePage: (value) => dispatch(setPage(value)),
  onFetchMovies: (params) => dispatch(loadMovies(params)),
  onFetchMoviesPage: (params) => dispatch(loadMoviesPage(params)),
});

const mapStateToProps = (state) => ({
  order: getOrder(state),
  sort: getSort(state),
  limit: getLimit(state),
  page: getPage(state),
  directorsLoading: getDirectorsLoading(state),
  moviesLoading: getMoviesLoading(state),
  movieQueryParams: getParams(state),
  movies: getMovies(state),
  moviesHasMore: getMoviesHasMore(state),
  directorFilter: getDirectorFilter(state),
  yearFilter: getYearFilter(state),
});

export const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListComponent);


