import React from 'react'
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

// react icons

import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { IoLogoAngular } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

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
                        <h2>Skills</h2>
                        <div className='Skills-container'>
                            <div><IoLogoJavascript className='Skills-icon'/> <p>JavaScript</p> </div>
                            <div><IoLogoHtml5 className='Skills-icon' /> <p>Html</p></div>
                            <div><IoLogoCss3 className='Skills-icon' /><p>Css</p></div>
                            <div><IoLogoReact className='Skills-icon' /><p>React</p></div>
                            <div><IoLogoAngular className='Skills-icon' /><p>Angular</p></div>
                            <div><SiTypescript className='Skills-icon' /><p>TypeScript</p></div>
                            <div><FaGitAlt className='Skills-icon' /><p>Git</p></div>
                        </div>

                        {/* <p>
                            JavaScript, React,  Html, CSS, Git, Angular, TypeScript
                        </p> */}
                        <h3>Learning</h3>
                        <p>
                            Now I'm learing Next.js, React-Native.
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
