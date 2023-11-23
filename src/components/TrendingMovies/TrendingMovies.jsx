import React from 'react';
import style from './TrendingMovies.module.css';
import { NavLink } from 'react-router-dom';

function TrendingMovies({ films = [] }) {
  return (
    <>
      <ul>
        {films?.map(film => {
          const movieId = film.id;
          return (
            <li key={movieId}>
              <NavLink to={`/movies/${movieId}`} className={style.nav_link}>
                {film.title || film.name}
              </NavLink>
            </li>
          );
        })}
        {}
      </ul>
    </>
  );
}

export default TrendingMovies;
