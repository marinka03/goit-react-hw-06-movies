import React, { useState } from 'react';
import style from './MoviesPage.module.css';
import { getSearchMovie } from 'helpers/api';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from 'components/Loader';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setFetching] = useState(false);
  const [resultFilms, setResultFilms] = useState('');
  const [params, setParams] = useSearchParams();
  const searchValue = params.get('searchValue') ?? '';

  const onClick = async e => {
    e.preventDefault();
    try {
      setFetching(true);
      const { results } = await getSearchMovie(searchValue);
      setResultFilms(results);
    } catch (error) {
      setErrorMessage('Error. not found searching film');
    } finally {
      setFetching(false);
    }
  };

  const heandleSearchValue = newValue => {
    params.set('searchValue', newValue);
    setParams(params);
  };

  return (
    <>
      {isFetching && <Loader />}
      {errorMessage && <ErrorPage errorMessage={errorMessage} />}
      <div className='container'>
        <form type="submit" className={style.form}>
          <input
            onChange={e => heandleSearchValue(e.target.value)}
            className={style.input}
            name="searchValue"
            type="text"
            value={searchValue}
            autoComplete="off"
            autoFocus
            placeholder="Search films..."
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
