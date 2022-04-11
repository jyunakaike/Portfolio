import React from 'react';

// import Jyunik from '../../assets/logos/jyunik.svg';
import Jyunik from '../../assets/logos/jyunik.png';
import './style.css';

import { AiOutlineArrowDown } from 'react-icons/ai'


export const Introduction = ({ useMoveSection }) => {
  const ArrowDownClick = () => {
    useMoveSection('About-me');
  }

  return (
    <section className="Intro-bg">
      <div className="Intro-container" id='Introduction'>
        <article className='Intro-Title'>
          <h1>Hi! I'm Jorge Jyun Nakamura</h1>
        </article>
        <article className='Intro-Detail'>
          <img src={Jyunik} alt="React Logo" className="imageAni" />
        </article>

        <AiOutlineArrowDown onClick={ArrowDownClick} className="Intro-ArrowDown" />
      </div>
    </section>
  )
}
