const base_url = 'https://movie-archive.herokuapp.com/api';

export const fetchMovies = ({ filter, page, limit, sort, order }) => {
  const url = `${ base_url }/movies${
    filter && `?${ filter.key }=${ filter.value }`
  }${
    page && `&_page=${ page }`
  }${
    limit && `&_limit=${ limit }`
  }${
    sort && `&_sort=${ sort }`
  }${
    order && `&_order=${ order }`
  }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

export const fetchMovie = (id) => {
  const url = `${ base_url }/movies/${ id }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

export const fetchMoviesDirector = (id) => {
  const url = `${ base_url }/movies/${ id }/director`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

