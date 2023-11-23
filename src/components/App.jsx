import style from './App.module.css';
import Header from './Header';
import { MoviesPage } from 'pages';
import { HomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import {MovieDetails} from 'pages';

const App = (props) => {

  return (
    <div className={style.app}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
