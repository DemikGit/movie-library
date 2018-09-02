import * as get from 'lodash.get';

export const getOrder = (state) => {
  return get(state, ['movieList', 'order'], 'desc');
};

export const getSort = (state) => {
  return get(state, ['movieList', 'sort'], '');
};

export const getLimit = (state) => {
  return get(state, ['movieList', 'pagination', 'limit'], 15);
};

export const getPage = (state) => {
  return get(state, ['movieList', 'pagination', 'page'], 1);
};


