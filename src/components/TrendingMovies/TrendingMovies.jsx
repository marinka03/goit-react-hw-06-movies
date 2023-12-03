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

function TrendingMovies({ films = [] }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {films?.map(film => {
          const movieId = film.id;
          return (
            <li key={movieId}>
              <StyledLink
                to={`/movies/${movieId}`}
                className={style.nav_link}
                state={{ from: location }}
              >
                {film.title || film.name}
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
