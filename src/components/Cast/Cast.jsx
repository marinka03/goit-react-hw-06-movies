import { getCast } from 'helpers/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Cast.module.css';

function Cast() {
  const [isLoading, setIsLoading] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [castArr, setCastArr] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    if(castArr){
      return
    }
    const f = async () => {
      try {
        setIsLoading('LOADING...');
        const { cast } = await getCast(movieId);
          if(!cast || cast.length === 0){
            setErrorMessage('We don`t have any cast for this movie');
          }
        setCastArr(cast);
      } catch (error) {
        setErrorMessage('Something went wrong!');
      } finally {
        setIsLoading('');
      }
    };
    f();
  }, [movieId, castArr]);
  const getImgActor = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w200' + url
      : 'https://fakeimg.pl/200x300?text=no+photo';
  };
  return (
    <>
      {isLoading && <p>{isLoading}</p>}
      {errorMessage && <p><b>{errorMessage}</b></p>}
      <ul className={style.list}>
        {castArr?.map(({ id, name, profile_path, character }) => (
          <li key={id} className={style['actor-card']}>
            <div className={style['card-content']}>
              <div className={style['img-wrapper']}>
                <img
                  className={style.img}
                  src={getImgActor(profile_path)}
                  alt={name}
                />
              </div>
              <p>
                <b>{name}</b>
              </p>
              <p className={style.character}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
