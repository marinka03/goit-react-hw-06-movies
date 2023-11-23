import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'helpers/api';
import style from './MovieDetails.module.css';
import Loader from 'components/Loader';
import { useParams } from 'react-router-dom';
import calmImg from '../images/calm-man.jpg'

function MovieDetails() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [url, setUrl] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [isFetching, setFetchingCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [voteAverage, setVoteAverage] = useState(0)

  const {movieId} = useParams();

  useEffect(() => {
    async function data() {
      try {
        setFetchingCheck(true);
        const data = await getMovieDetails(movieId);
        console.log(data)
        const { title, name, overview, poster_path, genres, release_date, vote_average
        } = data;
        setTitle(title);
        setName(name);
        setOverview(overview);
        setGenres(genres);
        setReleaseDate(release_date);
        setUrl(poster_path);
        setVoteAverage(vote_average)
      } catch (error) {
        setErrorMessage("Oops something happened don't worry, you can drink tea and try again later. ✨");
      } finally {
        setFetchingCheck(false);
      }
    }
    data();
 
  }, [movieId]);

  console.log(errorMessage);

  const getPoster = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w500' + url
      : 'https://fakeimg.pl/400x600?text=no+poster';
  };

  // const showLoader = isFetching && title || name !== '';
  return (
    <div className={style.wrapper}>
      {/* <p>{errorMessage}</p> */}
      {isFetching && <Loader />}
      {errorMessage.length > 0 ? (
        <div className={style.errorWrapper}>
        <img className={style.errorImage} src={calmImg} alt="Relax" />
        <p className={style.errorMessage} >{errorMessage}</p>
        </div>
        
      ) : (
        <>
          <button className={style.back_btn}>Go back</button>
          <div className={style.movie_details}>
            <img
              src={getPoster(url)}
              alt={title || name}
              width={300}
              height={400}
              className={style.movie_img}
            />
            <div className={style.text_info}>
              <h1 className={style.movie_name}>
                {title || name}
                <span className={style.year}>({releaseDate})</span>
              </h1>
              <p className='vote_average'>Vote Average: {voteAverage}</p>

              <h2 className={style.overview}>
                Overview
                <span className={style.overview_text}>{overview}</span>
              </h2>

              <h3 className={style.genres}>Genres</h3>
              <ul className={style.movie_list}>
                {genres?.map(genre => (
                  <li key={genre.id} >{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
