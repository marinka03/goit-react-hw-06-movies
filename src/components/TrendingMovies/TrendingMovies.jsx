import React from 'react';
import style from './TrendingMovies.module.css';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
color: darkcyan;
text-decoration: none;
&:hover{
  text-decoration: underline;
}
`

function TrendingMovies({ films = [] }) {
  return (
    <>
      <ul>
        {films?.map(film => {
          const movieId = film.id;
          return (
            <li key={movieId}>
              <StyledLink to={`/movies/${movieId}`} className={style.nav_link}>
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

export default TrendingMovies;
