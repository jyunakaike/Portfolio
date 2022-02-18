import React, { useState, useEffect} from 'react';
import './style.css';

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Me } from './Me';

const App = () => {
  // get ref From components 
  const [infoRef, setInfoRef] = useState()
  const [expRef, setExpRef] = useState()
  const [aboutRef, setAboutRef] = useState()
  // this state can change section components
  const [ref, setRef] = useState()

  // scroll view Smoothly
  const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth'})

  useEffect(() => {
    console.log(ref)
    if(ref !== undefined){
      scrollToRef(ref)
    }
  }, [ref])

  return (
    <React.Fragment>
      <Header expRef={expRef}  infoRef={infoRef} aboutRef={aboutRef}  setRef={setRef} />
      <Introduction refer={setInfoRef} />
      <Me refer={setAboutRef} />
      <Experience refer={setExpRef} />
      <Footer />
    </React.Fragment>
  )
}

export default App