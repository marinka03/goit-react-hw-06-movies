import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchMovie({ resultFilms }) {
  console.log(resultFilms);
  return (
    <div>
      <ul>
        {resultFilms?.map(film => (
          <li key={film.id}>
            <NavLink to={`/movies/${film.id}`}>
              {film.title}
              {`(${film.release_date})`}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMovie;
