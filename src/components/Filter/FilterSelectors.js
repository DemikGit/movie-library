import * as get from 'lodash.get';
import * as isEmpty from 'lodash.isempty';

export const getDirectorFilter = (state) => {
  return get(state, ['filter', 'directorId'], '');
};

export const getYearFilter = (state) => {
  return get(state, ['filter', 'year'], '');
};

export const getFilter = (state) => {
  const directorId = get(state, ['filter', 'directorId'], false);
  const year = get(state, ['filter', 'year'], false);
  const filter = {};

  if (!isEmpty(directorId)) {
    filter.directorId = directorId;
  }

  if (!isEmpty(year)) {
    filter.year = year;
  }

  return filter;
}
