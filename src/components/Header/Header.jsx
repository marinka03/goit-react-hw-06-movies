import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={style.header}>
      <nav className={style.navigation}>
        <NavLink
          className={({ isActive }) =>
            `${style.nav_link} ${isActive ? style.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${style.nav_link} ${isActive ? style.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
