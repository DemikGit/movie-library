import { SET_ORDER, SET_SORT, SET_LIMIT, SET_PAGE } from './MovieListActions';
import { LOAD_MOVIES } from '../App/AppActions';

const initialState = {
  sort: '',
  order: 'desc',
  pagination: {
    page: 1,
    limit: 15,
  }
};

export const moveListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: 1,
        }
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case SET_LIMIT:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          limit: action.payload,
        }
      };

    case SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        }
      };

    default:
      return state
  }
}

