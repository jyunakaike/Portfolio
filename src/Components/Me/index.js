import React, { useRef,useEffect } from 'react'
import './style.css'

export const Me = ({ refer }) => {
    const myRef = useRef(null)

    useEffect(() => {
        refer(myRef)
      }, [])
    
    return (
        <section ref={ myRef } className='About-container'>
            <h2>About Me</h2>
        </section>
    )
}
