import React from 'react';
import PropTypes from 'prop-types';
import style from './TrendingMovies.module.css';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: darkcyan;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const getPoster = url => {
  return url
    ? 'https://image.tmdb.org/t/p/w220_and_h330_face' + url
    : 'https://fakeimg.pl/220x330?text=no+poster';
};

function TrendingMovies({ films = [] }) {
  const location = useLocation();
  console.log('from trending', films);
  return (
    <>
      <ul className={style.list}>
        {films?.map(film => {
          const movieId = film.id;
          return (
            <li key={movieId}>
              <StyledLink
                to={`/movies/${movieId}`}
                className={style.nav_link}
                state={{ from: location }}
              >
                <p>{film.title || film.name}</p>
                <div className={style.poster}>
                  <img
                    src={getPoster(film.poster_path)}
                    alt={film.title}
                    title={film.title}
                    className={style.img}
                  />
                </div>
              </StyledLink>
            </li>
          );
        })}
        {}
      </ul>
    </>
  );
}

TrendingMovies.ptopTypes = {
  films: PropTypes.array,
};

export default TrendingMovies;
