import React from 'react';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'helpers/api';
import TrendingMovies from 'components/TrendingMovies';
import Loader from 'components/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';
import HeroSection from 'components/HeroSection';
import style from './HomePage.module.css';

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
    <div className='container'>
      {isFetching && <Loader />}
      {errorMessage && <ErrorPage errorMessage={errorMessage} />}
      <HeroSection films={films} />
      <div className={style.wrapper}>
        <h1 className={style.title}>Trending today</h1>
        <TrendingMovies films={films} />
      </div>
    </div>
  );
}

export default HomePage;
