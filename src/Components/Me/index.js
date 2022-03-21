import React from 'react'
import {FiTwitter, FiGithub} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';




import profile from '../../assets/image/profile.jpg'
import './style.css'


export const Me = () => {
    return (
        <section className='About-bg' >
            <div className='About-container' id='About-me'>
                <div className='About-detail'>
                    <div>
                        <h2>About Me</h2>
                        <p>
                            Hi! I'm Jorge Jyun Nakamura Ikeda, born in 1994.<br />
                            I'm enthusiastic about Learning tools, skills and new technologies. Now my main focus is learn and earn new skills and Experience of frontend Developer.
                        </p>
                    </div>

                    <div>
                        <h3>Skills</h3>
                        <p>
                            JavaScript, React,  Html, CSS, Git, Angular, TypeScript
                        </p>
                        <h3>Learning</h3>
                        <p>
                            Next.js, React-Native.
                        </p>
                    </div>

                </div>
                <div className='About-contact'>
                    <img src={profile} className='About-contact-img'></img>

                    <div className='About-contact-details'>
                        <span> <FiTwitter /> Twitter</span>
                        <span> <FiGithub /> Github</span>
                        <span> <SiGmail /> Gmail</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
