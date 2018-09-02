import { resolve, reject } from 'redux-simple-promise';
import { LOAD_DIRECTORS, LOAD_MOVIES, LOAD_MOVIES_PAGE } from './AppActions';
import * as isEmpty from 'lodash.isempty';

const initialState = {
  directors: {
    data: [],
    loading: {
      isLoading: false,
      success: false,
    },
    hasMore: false,
  },
  movies: {
    data: [],
    loading: {
      isLoading: false,
      success: false,
    },
    hasMore: false,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DIRECTORS:
      return {
        ...state,
        directors: {
          ...state.directors,
          data: [],
          loading: { isLoading: true, success: false },
          hasMore: true,
        }
      };
    case resolve(LOAD_DIRECTORS):
      return {
        ...state,
        directors: {
          data: [...action.payload],
          loading: { isLoading: false, success: true },
          hasMore: !isEmpty(action.payload),
        }
      };
    case reject(LOAD_DIRECTORS):
      return {
        ...state,
        directors: {
          loading: { isLoading: false, success: false },
          hasMore: !isEmpty(action.payload),
        }
      };

    case LOAD_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: [],
          loading: { isLoading: true, success: false },
          hasMore: true,
        }
      };
    case resolve(LOAD_MOVIES):
      return {
        ...state,
        movies: {
          data: [...action.payload],
          loading: { isLoading: false, success: true },
          hasMore: !isEmpty(action.payload),
        }
      };
    case reject(LOAD_MOVIES):
      return {
        ...state,
        movies: {
          loading: { isLoading: false, success: false },
          hasMore: !isEmpty(action.payload),
        }
      };

    case LOAD_MOVIES_PAGE:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: { isLoading: true, success: false },
        }
      };
    case resolve(LOAD_MOVIES_PAGE):
      return {
        ...state,
        movies: {
          data: [...state.movies.data, ...action.payload],
          loading: { isLoading: false, success: true },
          hasMore: !isEmpty(action.payload),
        }
      };
    case reject(LOAD_MOVIES_PAGE):
      return {
        ...state,
        movies: {
          loading: { isLoading: false, success: false },
          hasMore: !isEmpty(action.payload),
        }
      };

    default:
      return state
  }
}

