import * as get from 'lodash.get';
import * as isEmpty from 'lodash.isempty';

const base_url = 'https://movie-archive.herokuapp.com/api/directors';

export const fetchDirectors = (params) => {

  let filter = get(params, ['filter'], false);
  const page = get(params, ['page'], false);
  const limit = get(params, ['limit'], false);
  const sort = get(params, ['sort'], false);
  const order = get(params, ['order'], false);

  filter = Object.keys(filter).reduce((previous, key) => {
    return previous + `${ key }=${ filter[key] }&`
  }, '');

  const url = `${ base_url }?${
    !isEmpty(filter) ? `${filter}` : ''
  }${
    page ? `_page=${ page }&` : ''
  }${
    limit ? `_limit=${ limit }&` : ''
  }${
    sort ? `_sort=${ sort }&` : ''
  }${
    order ? `_order=${ order }` : ''
  }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
};

export const fetchDirector = (id) => {
  const url = `${ base_url }/${ id }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

export const fetchDirectorsMovies = (id) => {
  const url = `${ base_url }/${ id }/movies`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

