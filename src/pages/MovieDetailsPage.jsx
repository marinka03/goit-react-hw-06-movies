import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import Loader from 'components/Loader';

import { getMovieDetails } from 'helpers/api';
import style from './MovieDetailsPage.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #1c2731;
  font-weight: bold;
  &.active{
    color: #356d9e
  }
`

let detailsValues = {
  title: '',
  name: '',
  overview: '',
  url: '',
  genres: [],
  releaseDate: '',
  voteAverage: 0,
};

function MovieDetails() {
  const [valuesDatails, setValueDetails] = useState(detailsValues);
  const [isFetching, setFetchingCheck] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    async function data() {
      try {
        const {
          title,
          name,
          overview,
          poster_path,
          genres,
          release_date,
          vote_average,
        } = await getMovieDetails(movieId);

        setValueDetails({
          title,
          name,
          overview,
          url: poster_path,
          genres,
          releaseDate: release_date,
          voteAverage: vote_average,
        });
      } catch (error) {
        setErrorMessage(
          "Oops something happened don't worry, you can drink tea and try again later. ✨"
        );
      } finally {
        setFetchingCheck(false);
      }
    }
    data();
  }, [movieId]);

  const getPoster = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w500' + url
      : 'https://fakeimg.pl/400x600?text=no+poster';
  };

  return (
    <div className={style.wrapper}>
      {isFetching && <Loader />}
      {errorMessage ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          <button className={style.back_btn}>Go back</button>
          <section className={style.movie_details}>
            <img
              src={getPoster(valuesDatails.url)}
              alt={valuesDatails.title || valuesDatails.name}
              width={300}
              height={400}
              className={style.movie_img}
            />
            <div className={style.text_info}>
              <h1 className={style.movie_name}>
                {valuesDatails.title || valuesDatails.name}
                <span className={style.year}>
                  ({valuesDatails.releaseDate})
                </span>
              </h1>
              <p className="vote_average">
                Vote Average: {valuesDatails.voteAverage}
              </p>

              <h2 className={style.overview}>
                Overview
                <span className={style.overview_text}>
                  {valuesDatails.overview}
                </span>
              </h2>

              <h3 className={style.genres}>Genres</h3>
              <ul className={style.movie_list}>
                {valuesDatails.genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
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

export default MovieDetails;
