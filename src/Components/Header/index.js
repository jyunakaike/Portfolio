import React, { useState, useEffect} from 'react';
import './style.css';

export const Header = ({expRef,eduRef,setRef}) => {

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
        setRef(e)
    }

    return (
        <header className={` ${(showFixed) ? "header-small" : "header"}`} >
            <div className={` ${(showFixed) ? "small" : "Header-container"}`}>
                 <span className='Header-Logo'>Jyunik</span>
                 <div className='Header-Categories'>
                     <h2 >Section1</h2>
                     <h2 onClick={() => sectionClick(expRef)}>Section2</h2>
                     <h2 onClick={() => sectionClick(eduRef)}>Section3</h2>
                 </div>
             </div>
        </header>
    )
}
