import { ErrorPage, MoviesPage } from 'pages';
import { HomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage } from 'pages';
import AppLayout from './AppLayout/AppLayout';

const App = props => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
