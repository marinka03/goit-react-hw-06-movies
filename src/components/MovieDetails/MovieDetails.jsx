import React, { useRef } from 'react';
import style from './MovieDetails.module.css';

function MovieDetails({ valuesDatails }) {
  const { title, name, overview, url, genres, releaseDate, voteAverage } =
    valuesDatails;
  const getPoster = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w500' + url
      : 'https://fakeimg.pl/400x600?text=no+poster';
  };
  const voteRef = useRef('');

  if (voteRef.current?.style && voteAverage <= 3) {
    voteRef.current.style.background = '#990F47';
  } else if (voteRef.current?.style && voteAverage > 3 && voteAverage < 7) {
    voteRef.current.style.background = '#A13E28';
  } else if (voteRef.current?.style && voteAverage >= 7) {
    voteRef.current.style.background = '#7D852F';
  }

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
        <div className={style.rating}>
          <div className={style['vote-circle']} ref={voteRef}>
            <b>{String(voteAverage).replace('.', '').slice(0, 2)}%</b>
          </div>
          <p>User rating</p>
        </div>

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

export default MovieDetails;
