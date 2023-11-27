const option = { method: 'GET', headers: { accept: 'application/json' } };

export const getTrendingMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=20743075650ced62d8357927907f018d`,
    option
  );
  return await response.json();
};

export const getMovieDetails = async (movieId = 961323) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=20743075650ced62d8357927907f018d`,
    option
  );
  return await response.json();
};
export const getSearchMovie = async movie => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1&api_key=20743075650ced62d8357927907f018d`,
    option
  );
  return await response.json();
};
export const getCast = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=20743075650ced62d8357927907f018d`,
    option
  );
  return await response.json();
};
