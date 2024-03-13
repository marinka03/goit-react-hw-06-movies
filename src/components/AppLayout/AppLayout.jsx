import React, { Suspense } from 'react';
import Header from '../Header';
// import style from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default AppLayout;
