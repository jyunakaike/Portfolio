import React from 'react';

// import Jyunik from '../../assets/logos/jyunik.svg';
import Jyunik from '../../assets/logos/jyunik.png';
import icon from '../../assets/logos/icon.png';
import './style.css';



export const Introduction = () => {
  return (
    <section className="Intro-bg">
      <div className="Intro-container" id='Introduction'>
        <article className='Intro-Title'>
          <h1>Hi! I'm Jorge Jyun Nakamura</h1>
        </article>
        <article className='Intro-Detail'>
          {/* Aqui hay una imagen */}
          {/* <Jyunik /> */}
          {/* <img src={Jyunik} /> */}
          <img src={Jyunik} alt="React Logo" className="imageAni" />
        </article>
      </div>
    </section>
  )
}
