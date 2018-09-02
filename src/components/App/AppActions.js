import { fetchDirectors } from '../../services/DirectorService/DirectorService';
import { fetchMovies } from '../../services/MovieService/MovieService';

export const LOAD_DIRECTORS = 'LOAD_DIRECTORS';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_PAGE = 'LOAD_MOVIES_PAGE';

export const loadDirectors = () => {
  return {
    type: LOAD_DIRECTORS,
    payload: {
      promise: fetchDirectors(),
    }
  };
};

export const loadMovies = (params) => {
  return {
    type: LOAD_MOVIES,
    payload: {
      promise: fetchMovies(params),
    }
  };
};

export const loadMoviesPage = (params) => {
  return {
    type: LOAD_MOVIES_PAGE,
    payload: {
      promise: fetchMovies(params),
    }
  };
};
