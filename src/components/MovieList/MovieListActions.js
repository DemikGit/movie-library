export const SET_SORT = 'SET_SORT';
export const SET_ORDER = 'SET_ORDER';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_PAGE = 'SET_PAGE';

export const setSort = (value) => {
  return {
    type: SET_SORT,
    payload: value,
  };
};

export const setOrder = (value) => {
  return {
    type: SET_ORDER,
    payload: value,
  };
};

export const setLimit = (value) => {
  return {
    type: SET_LIMIT,
    payload: value,
  };
};

export const setPage = (value) => {
  return {
    type: SET_PAGE,
    payload: value,
  };
};
