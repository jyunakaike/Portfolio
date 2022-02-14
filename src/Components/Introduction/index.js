import React, {useRef, useEffect} from 'react'
import './style.css'

export const Introduction = ({refer}) => {
  const myRef = useRef(null);

  useEffect(() => {
    refer(myRef)
  }, [])

  return (
    <section ref={myRef} className="Intro-container">
        <article className='Intro-Title'>   
            <h1>Hi! I'm Jyun, frontEnd Developer </h1> 
        </article>
        <article>
            Aqui hay una imagen 
        </article>
        
    </section>
  )
}
