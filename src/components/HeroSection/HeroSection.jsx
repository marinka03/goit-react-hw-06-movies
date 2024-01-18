import React from 'react';
import style from '../HeroSection/HeroSection.module.css';
import ButtonPink from 'components/Buttons/ButtonPink';

function HeroSection() {
  return (
    <section className={style.hero}>
      <div className={style.content}>
        <h1>Dive into a universe of un-ending content and channels</h1>
        <ButtonPink text="Start FREE trial" />
      </div>
    </section>
  );
}

export default HeroSection;
