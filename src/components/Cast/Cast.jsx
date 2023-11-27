import { getCast } from 'helpers/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [isLoading, setIsLoading] = useState('');
  const [castArr, setCastArr] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const f = async () => {
      try {
        // console.log("Params",params.movieId)
        setIsLoading('LOADING...');
        const { cast } = await getCast(movieId);
        console.log('DATA FROM CAST', cast);
        setCastArr(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading('');
      }
    };
    f();
  }, [movieId]);
  const getImgActor = url => {
    return url
      ? 'https://image.tmdb.org/t/p/w200' + url
      : 'https://fakeimg.pl/200x300?text=no+actor';
  };
  return (
    <>
      {isLoading && <p>{isLoading}</p>}
      <ul>
        {castArr?.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img src={getImgActor(profile_path)} alt={name} />
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
