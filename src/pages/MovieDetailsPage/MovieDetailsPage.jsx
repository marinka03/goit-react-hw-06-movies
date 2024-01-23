import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { IoArrowUndoOutline } from 'react-icons/io5';

import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from 'components/Loader';

import { getMovieDetails } from 'helpers/api';
import style from './MovieDetailsPage.module.css';
import styled from 'styled-components';
import MovieDetails from 'components/MovieDetails';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #356d9e;
  font-weight: bold;
  &.active {
    color: #92b7d8;
  }
`;

let detailsValues = {
  title: '',
  name: '',
  overview: '',
  url: '',
  genres: [],
  releaseDate: '',
  voteAverage: 0,
};

function MovieDetailsPage() {
  const [valuesDatails, setValueDetails] = useState(detailsValues);
  const [isFetching, setFetchingCheck] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    async function getDetailsData() {
      try {
        const data = await getMovieDetails(movieId);

        setValueDetails({
          title: data.title,
          name: data.name,
          overview: data.overview,
          url: data.poster_path,
          genres: data.genres,
          releaseDate: data.release_date,
          voteAverage: data.vote_average,
        });
      } catch (error) {
        setErrorMessage(
          "Oops something happened don't worry, you can drink tea and try again later. ✨"
        );
      } finally {
        setFetchingCheck(false);
      }
    }
    getDetailsData();
  }, [movieId]);

  return (
    <div className={style.wrapper}>
      {isFetching && <Loader />}
      {errorMessage ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          <Link
            className={style.back}
            to={locationRef.current.state?.from ?? '/'}
          >
            <IoArrowUndoOutline />
            Go back
          </Link>
          <section className={style.movie_details}>
            <MovieDetails valuesDatails={valuesDatails} />
          </section>
        </>
      )}
      <section className={style['additional-section']}>
        <p>Additional information:</p>
        <ul>
          <li>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </li>
        </ul>
      </section>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
