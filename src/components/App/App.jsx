import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Filter } from '../Filter/Filter';
import { MovieList } from '../MovieList/MovieList';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Grid container justify="center" style={{ padding: '54px' }}>
          <Grid item xs={ 10 }>
            <Typography style={{ marginBottom: '38px' }} variant="title">
              Movies Archive
            </Typography>
          </Grid>
          <Grid container justify="center" spacing={ 16 }>
            <MovieList />
            <Filter />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

