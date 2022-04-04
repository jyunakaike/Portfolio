import React from 'react';
import './style.css';
import icon from '../../assets/logos/icon.png';

export const Introduction = () => {
  return (
    <section className="Intro-bg">
      <div className="Intro-container" id='Introduction'>
        <article className='Intro-Title'>
          <h1>Hi! I'm Jorge Jyun Nakamura</h1>
        </article>
        <article className='Intro-Detail'>
          Aqui hay una imagen

          <img  src={icon} className="imageAni"/>
        </article>
      </div>
    </section>
  )
}
