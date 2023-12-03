import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetails.module.css';

function MovieDetails({ valuesDatails }) {
  const { title, name, overview, url, genres, releaseDate, voteAverage } =
    valuesDatails;
  const getPoster = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w500' + url
      : 'https://fakeimg.pl/400x600?text=no+poster';
  };
  return (
    <>
      <img
        src={getPoster(url)}
        alt={title || name}
        width={300}
        height={400}
        className={style.movie_img}
      />
      <div className={style.text_info}>
        <h1 className={style.movie_name}>
          {title || name}
          <span className={style.year}>({releaseDate})</span>
        </h1>
        <p className="vote_average">Vote Average: {voteAverage}</p>

        <h2 className={style.overview}>
          Overview
          <span className={style.overview_text}>{overview}</span>
        </h2>

        <h3 className={style.genres}>Genres</h3>
        <ul className={style.movie_list}>
          {genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
MovieDetails.propTypes = {
  valuesDatails: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    url: PropTypes.string,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
  }),
};

export default MovieDetails;
