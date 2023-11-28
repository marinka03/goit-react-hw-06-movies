import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  
  &.active {
      color: #e44888;
    }
`

function Header() {
  return (
    <div className={style.header}>
      <nav className={style.navigation}>
        <StyledNavLink
          className={({ isActive }) =>
            `${style.nav_link} ${isActive ? style.active : ''}`
          }
          to="/"
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          className={({ isActive }) =>
            `${style.nav_link} ${isActive ? style.active : ''}`
          }
          to="/movies"
        >
          Movies
        </StyledNavLink>
      </nav>
    </div>
  );
}

export default Header;
