import { ErrorPage, MoviesPage } from 'pages';
import { HomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage } from 'pages';
import AppLayout from './AppLayout/AppLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = props => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast/>} />
            <Route
              path="reviews"
              element={<Reviews/>}
            />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
