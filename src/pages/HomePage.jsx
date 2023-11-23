import React from 'react';
import style from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'helpers/api';
import TrendingMovies from 'components/TrendingMovies';
import Loader from 'components/Loader';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setFetchingCheck] = useState(false)

  useEffect(() => {
    async function f() {
      try {
        setFetchingCheck(true)
        const { results } = await getTrendingMovie();
        setFilms(results);
        console.log("FILMS", films);
      } catch (error) {
        setErrorMessage('oops, something happened')
      }finally{
        setFetchingCheck(false)
      }
    }
    f();
    // eslint-disable-next-line
  }, []);
  console.log(errorMessage)

  return (
    <>
    {isFetching && <Loader />}
    <div className={style.wrapper}>
      <h1>Trending today</h1>
      <TrendingMovies films={films} />
    </div>
    </>
    
  );
}

export default HomePage;
