import React from 'react';
import style from '../HeroSection/HeroSection.module.css';
import ButtonPink from 'components/Buttons/ButtonPink';

const backdrop = url => {
  return url
    ? 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces' + url
    : '/public/hero-background.png';
};

function HeroSection({ films }) {
  // console.log(films? films[0].backdrop_path : 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/yOm993lsJyPmBodlYjgpPwBjXP9.jpg')
  // https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces

  const x = backdrop(films && films[1].backdrop_path);
  console.log(typeof x);
  const mystyle = {
    backgroundImage: `url(${x})`,
  };
  return (
    <section className={style.hero} style={mystyle}>
      <div className={style.content}>
        <h1 className={style.title}>
          Dive into a universe of un-ending content and channels
        </h1>
      </div>
      <ButtonPink text="Start FREE trial" />
    </section>
  );
}

export default HeroSection;
