import { SET_DIRECTOR_FILTER, SET_YEAR_FILTER } from './FilterActions';

const initialState = {
  directorId: '',
  year: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIRECTOR_FILTER:
      return {
        ...state,
        directorId: action.payload,
      };
    case SET_YEAR_FILTER:
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state
  }
}

