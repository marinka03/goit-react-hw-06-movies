import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: darkcyan;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function SearchMovie({ resultFilms }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {resultFilms?.map(film => (
          <li key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
              {`(${film.release_date})`}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMovie;
