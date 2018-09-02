export const SET_DIRECTOR_FILTER = 'SET_DIRECTOR_FILTER';
export const SET_YEAR_FILTER = 'SET_YEAR_FILTER';

export const setDirectorFilter = (value) => {
  return {
    type: SET_DIRECTOR_FILTER,
    payload: value,
  };
};

export const setYearFilter = (value) => {
  return {
    type: SET_YEAR_FILTER,
    payload: value,
  };
};


