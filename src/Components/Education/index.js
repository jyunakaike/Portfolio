import React , {useRef, useEffect} from 'react';
import './style.css'

export const Education = ({refer}) => {

  const myRef = useRef(null);

  useEffect(() => {
    refer(myRef)
  }, [])
  
  

  return (
    <section ref={myRef} className="Education-Title"> 
        <h1>Esto es Education Section</h1> 
        <article>
            Aqui coloco mi educacion 
        </article>

    </section>
  )
}
