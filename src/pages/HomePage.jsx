import React from 'react';
// import style from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'helpers/api';
import TrendingMovies from 'components/TrendingMovies';
import Loader from 'components/Loader';
import ErrorPage from './ErrorPage';

function HomePage() {
  const [films, setFilms] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setFetchingCheck] = useState(true);

  useEffect(() => {
    if (films) {
      return;
    }
    async function f() {
      try {
        const { results } = await getTrendingMovie();
        setFilms(results);
      } catch (error) {
        setErrorMessage('oops, something happened');
      } finally {
        setFetchingCheck(false);
      }
    }
    f();
  }, [films]);

  return (
    <>
      {isFetching && <Loader />}
      {errorMessage && <ErrorPage errorMessage={errorMessage} />}

      <div>
        <h1>Trending today</h1>
        <TrendingMovies films={films} />
      </div>
    </>
  );
}

export default HomePage;
