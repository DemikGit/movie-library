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

  }

  render() {

    return (
      <Fragment>
        <Grid
          item
          xs={ 2 }
          style={{
            position: 'sticky',
            top: '100px',
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
                  id="movie-director"
                  value={10}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="movie-year">Year</InputLabel>
                <Select
                  id="movie-year"
                  value={10}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

