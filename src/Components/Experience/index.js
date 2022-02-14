import React, {useRef, useEffect} from 'react'
import './style.css'

export const Experience = ({refer}) => {

  const myRef = useRef(null);

  useEffect(() => {
    refer(myRef)
  }, [])

  return (
      <section ref={myRef} className='Experience-container'>
          <h2>What I can Do</h2>
      </section>
  )
}
