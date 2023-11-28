import React, { useEffect, useState } from 'react';
import { getReviews } from 'helpers/api';
import { useParams } from 'react-router-dom';
import style from './Reviews.module.css';

function Reviews() {
  const [isLoading, setIsLoading] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reviewList, setReviewList] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (reviewList) {
      return;
    }
    async function getReviewsList() {
      try {
        setIsLoading('LOADING...');
        const { results } = await getReviews(movieId);
        if (!results || results.length === 0) {
          setErrorMessage('We don`t have any reviews for this movie');
        }
        setReviewList(results);
      } catch (error) {
        setErrorMessage('Something went wrong!');
      } finally {
        setIsLoading('');
      }
    }
    getReviewsList();
  }, [movieId, reviewList]);

  return (
    <>
      {isLoading && <p>{isLoading}</p>}
      {errorMessage && (
        <p>
          <b>{errorMessage}</b>
        </p>
      )}
      <ul>
        {reviewList?.map(
          ({
            author_details: { avatar_path, username, rating },
            content,
            id,
          }) => (
            <li key={id}>
              <div className="review-card">
                <div className={style['author-info']}>
                  <div className={style['avatar-wrapper']}>
                    <img
                      src={
                        avatar_path
                          ? 'https://image.tmdb.org/t/p/w200' + avatar_path
                          : 'https://fakeimg.pl/200x300?text=no+photo'
                      }
                      alt="Avatar"
                      className={style.avatar}
                    />
                  </div>
                  <p>
                    <b>{username}</b>
                  </p>
                </div>
                <p>{content}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default Reviews;
