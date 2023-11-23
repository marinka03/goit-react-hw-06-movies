import React, { useState } from 'react';
import style from './MoviesPage.module.css';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');

  const heandleSubmit=(e)=>{
    e.preventDefault();
    setSearchValue('');
  } 

  const heandleSearchValueChange = e => {
    e.preventDefault()
    setSearchValue(e.target.value);
    console.dir(e.target.defaultValue);
    console.log(searchValue);
  };

  return (
    <div>
      <form type="submit" className={style.form} onSubmit={heandleSubmit}>
        <input
          onChange={heandleSearchValueChange}
          className={style.input}
          name="searchValue"
          type="text"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit" className={style.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </div>
  );
}

export default MoviesPage;
