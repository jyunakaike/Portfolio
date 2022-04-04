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
          {/* <img src={Jyunik} alt="React Logo" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 904 722">
            <g id="Capa_1-2" data-name="Capa 1">
              <image width="904" height="722" xlinkHref={Jyunik} />
            </g>
          </svg>

          {/* <img  src={icon} className="imageAni"/> */}
        </article>
      </div>
    </section>
  )
}
