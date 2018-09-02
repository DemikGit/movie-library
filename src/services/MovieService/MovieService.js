import * as get from 'lodash.get';
import * as isEmpty from 'lodash.isempty';

const base_url = 'https://movie-archive.herokuapp.com/api/movies';

export const fetchMovies = (params) => {

  let filter = get(params, ['filter'], false);
  const page = get(params, ['page'], false);
  const limit = get(params, ['limit'], false);
  const sort = get(params, ['sort'], false);
  const order = get(params, ['order'], false);

  filter = Object.keys(filter).reduce((previous, key) => {
    return previous + `${ key }=${ filter[key] }&`
  }, '');

  const url = `${ base_url }?${
    !isEmpty(filter) ? `${ filter }` : ''
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
}

export const fetchMovie = (id) => {
  const url = `${ base_url }/${ id }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

export const fetchMoviesDirector = (id) => {
  const url = `${ base_url }/${ id }/director`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

