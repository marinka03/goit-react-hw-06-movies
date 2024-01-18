import React from 'react';
import style from '../ButtonPink/ButtonPink.module.css';

function ButtonPink({ text }) {
  return <button className={style.btn}>{text}</button>;
}

export default ButtonPink;
