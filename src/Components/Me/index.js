import React, { useRef, useEffect } from 'react'
import './style.css'

import profile from '../../assets/image/profile.jpg'

export const Me = ({ refer }) => {
    const myRef = useRef(null)

    useEffect(() => {
        refer(myRef)
    }, [])

    return (
        <section ref={myRef} className='About-container'>
            <div className='About-detail'>
                <h2>About Me</h2>
                <p>
                    Hi! I'm Jorge Jyun Nakamura Ikeda, born in 1994.<br />
                    I'm enthusiastic about Learning tools, skills and new technologies. Now my main focus is learn and earn new skills and Experience of frontend Developer.
                </p>
                <h3>Skills</h3>
                    <p>
                        JavaScript, React,  Html, CSS, Git, Angular, TypeScript
                    </p>
                <h3>Learning</h3>
                    <p>
                        Next.js, React-Native.
                    </p>
            </div>
            <div className='About-contact'>
                <img src={profile} className='About-contact-img'></img>

                <div className='About-contact-details'>
                    <span>Twitter</span> 
                    <span>github</span> 
                    <span>Gmail</span> 
                    <span>Twitter</span> 
                </div>
            </div>
        </section>
    )
}
