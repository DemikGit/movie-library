const base_url = 'https://movie-archive.herokuapp.com/api';

export const fetchDirectors = ({ filter, page, limit, sort, order }) => {
  const url = `${ base_url }/directors${
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

export const fetchDirector = (id) => {
  const url = `${ base_url }/directors/${ id }`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

export const fetchDirectorsMovies = (id) => {
  const url = `${ base_url }/directors/${ id }/movies`;

  return (
    fetch(
      url
    ).then((response) => response.json())
  );
}

