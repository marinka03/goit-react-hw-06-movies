import React, { Suspense } from 'react';
import Header from '../Header';
import style from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className={style.layout}>
      <Header />
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
