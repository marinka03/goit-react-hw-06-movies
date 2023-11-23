import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import calmImg from '../images/calm-man.jpg';
import style from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

function ErrorPage({
  errorMessage = "Unfortunately, you can't view the recordings of this page, but you can choose a great movie for the evening.",
}) {
  return (
    <div>
      <div className={style.errorWrapper}>
        <img className={style.errorImage} src={calmImg} alt="Relax" />
        <p className={style.errorMessage}>{errorMessage}</p>
        <Link to={'/'}>
          Home
          <MdDoubleArrow />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
