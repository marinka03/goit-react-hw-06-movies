import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from './AppLayout/AppLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import GlobalStyles from './GlobalStyles';
// import { styled } from 'styled-components';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
// const StyledWra = styled('div')`
//   text-decoration: none;
//   color: #fff;

//   &.active {
//     color: #e44888;
//   }
// `;
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <GlobalStyles />
    </>
  );
};

export default App;
