import React from 'react';
import Header from '../Header';
import style from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet /> 
    </div>
  );
}

export default AppLayout;
