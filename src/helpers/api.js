export const getTrendingMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=20743075650ced62d8357927907f018d`
  );
  return await response.json();
};

export const getMovieDetails = async (movieId = 961323) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=20743075650ced62d8357927907f018d`
  );
  return await response.json();
};
