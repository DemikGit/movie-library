import * as get from 'lodash.get';

import { getFilter } from '../Filter/FilterSelectors';
import { getOrder, getSort, getPage, getLimit } from '../MovieList/MoveListSelectors';

export const getDirectorsOptions = (state) => {
  return get(state, ['app', 'directors', 'data'], []).map(director => ({
    value: director.id,
    label: director.title
  }));
};

export const getParams = (state) => {
  return {
    filter: getFilter(state),
    order: getOrder(state),
    sort: getSort(state),
    page: getPage(state),
    limit: getLimit(state),
  };
}

export const getDirectorById = (id, state) => {
  return state.app.directors.data.filter((director) => director.id === id );
}

export const getMovies = (state) => {
  return state.app.movies.data.map((movie) => {
    let director = getDirectorById(movie.directorId, state);
    director = get(director, ['0', 'title'], '');
    const newMovie = { ...movie, director };

    delete newMovie.directorId

    return newMovie;
  });
}

export const getDirectorsLoading = (state) => {
  return get(state, ['app', 'directors', 'loading'], {
    isLoading: false,
    success: false,
  })
}

export const getMoviesLoading = (state) => {
  return get(state, ['app', 'movies', 'loading'], {
    isLoading: false,
    success: false,
  })
}

export const getMoviesHasMore = (state) => {
  return get(state, ['app', 'movies', 'hasMore'], true);
}


export const getDirectorsHasMore = (state) => {
  return get(state, ['app', 'directors', 'hasMore'], true);
}

