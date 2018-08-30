import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class Filter extends Component {

  handleChange = (event) => {

  }

  render() {
    return (
      <Fragment>
        <Grid item xs={ 2 }>
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
                <InputLabel htmlFor="movie-year">Director</InputLabel>
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

