import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { setDirectorFilter, setYearFilter } from './FilterActions';
import { getDirectorFilter, getYearFilter } from './FilterSelectors';

import { loadDirectors } from '../App/AppActions';
import { getDirectorsOptions } from '../App/AppSelectors';

import {
  Grid, Paper, Typography,
  InputLabel, FormControl, Select
} from '@material-ui/core';

class FilterComponent extends Component {

  state = {
    yearFilterOptions: Array(
      (new Date()).getFullYear() - 1899
    ).fill((new Date()).getFullYear())
     .map((year, index) => ({ value: year - index, label: year - index })),
  }

  componentDidMount = () => {
    const { onFetchDirectors } = this.props;

    onFetchDirectors();
  }

  handleChange = (event, name) => {
    const capitalizeName = name.replace(/\b\w/g, l => l.toUpperCase());

    this.props[`onChange${capitalizeName}`](event.target.value);
  }

  renderSelectorItems = (array) => array.map( item => {
    return (
      <option
        key={ item.value }
        value={ item.value }
      >
        { item.label }
      </option>
    );
  });

  render() {
    const { yearFilterOptions } = this.state;
    const { directors, directorFilter, yearFilter } = this.props;

    return (
      <Fragment>
        <Grid
          item
          xs={ 2 }
          style={{
            position: 'sticky',
            top: '32px',
            height: '300px',
          }}
        >
          <Paper style={{ padding: '32px' }}>
            <Typography style={{ marginBottom: '16px' }} variant="headline" component="h3">
              Filter
            </Typography>
            <Grid container direction="column" justify="flex-start">
              <FormControl style={{ marginBottom: '16px' }}>
                <InputLabel htmlFor="movie-director">Director</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'movie-director',
                    id: 'movie-director',
                  }}
                  value={ directorFilter }
                  onChange={(event) => { this.handleChange(event, 'directorFilter') }}
                >
                  <option key="uni-key" value="" />
                  { this.renderSelectorItems(directors) }
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="movie-year">Year</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'movie-year',
                    id: 'movie-year',
                  }}

                  value={ yearFilter }
                  onChange={(event) => { this.handleChange(event, 'yearFilter') }}
                >
                  <option key="uni-key" value="" />
                  { this.renderSelectorItems(yearFilterOptions) }
                </Select>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeDirectorFilter: (value) => dispatch(setDirectorFilter(value)),
  onChangeYearFilter: (value) => dispatch(setYearFilter(value)),
  onFetchDirectors: () => dispatch(loadDirectors()),
});

const mapStateToProps = (state) => ({
  yearFilter: getYearFilter(state),
  directorFilter: getDirectorFilter(state),
  directors: getDirectorsOptions(state),
});

export const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);

