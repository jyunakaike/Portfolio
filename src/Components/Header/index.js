import React, { useState, useEffect} from 'react';
import './style.css';

export const Header = ({useMoveSection}) => {

    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
      const onScroll =() => {
          const newShowFixed = window.scrollY > 100
          showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)
      return () => {
          document.removeEventListener('scroll', onScroll)
      }
    }, [showFixed])

    const sectionClick = (e) => {
        useMoveSection(e)
    }

    return (
        <header className={` ${(showFixed) ? "header-small" : "header"}`} >
            <div className={` ${(showFixed) ? "small" : "Header-container"}`}>
                 <span className='Header-Logo'>Jyunik</span>
                 <div className='Header-Categories'>
                     <h2 onClick={() => sectionClick('Introduction')}>Intro</h2>
                     <h2 onClick={() => sectionClick('About-me')}>About Me</h2>
                     <h2 onClick={() => sectionClick('Experience')}>Skills</h2>
                 </div>
             </div>
        </header>
    )
}
