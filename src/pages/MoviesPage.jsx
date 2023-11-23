import React, { useState } from 'react';
import style from './MoviesPage.module.css';
import { getSearchMovie } from 'helpers/api';
import ErrorPage from './ErrorPage';
import Loader from 'components/Loader';
import SearchMovie from 'components/SearchMovie/SearchMovie';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setFetching] = useState(false);
  const [resultFilms, setResultFilms] = useState('');

  const onClick = async e => {
    e.preventDefault();
    try {
      setFetching(true);
      const { results } = await getSearchMovie(searchValue);
      setResultFilms(results);
      console.log('FILMINFO', results);
    } catch (error) {
      setErrorMessage('Error. not found searching film');
    } finally {
      setFetching(false);
    }
  };

  const heandleSearchValue = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log(e.target.value);
    console.dir(e.target.name);
  };

  return (
    <>
      {isFetching && <Loader />}
      {errorMessage && <ErrorPage errorMessage={errorMessage} />}
      <div>
        <form type="submit" className={style.form}>
          <input
            onChange={heandleSearchValue}
            className={style.input}
            name="searchValue"
            type="text"
            value={searchValue}
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button className={style.button} onClick={onClick}>
            <span className="button-label">Search</span>
          </button>
        </form>
        {resultFilms && <SearchMovie resultFilms={resultFilms} />}
      </div>
    </>
  );
}

export default MoviesPage;
