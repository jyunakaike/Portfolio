import React, { useState, useEffect} from 'react';
import './style.css';

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Education } from './Education';
import { Footer } from './Footer';
import { Me } from './Me';

const App = () => {
  // get ref From components 
  const [infoRef, setInfoRef] = useState()
  const [expRef, setExpRef] = useState()
  const [eduRef, setEduRef] = useState()
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
      <Header expRef={expRef} eduRef={eduRef} infoRef={infoRef} aboutRef={aboutRef}  setRef={setRef} />
      <Introduction refer={setInfoRef} />
      <Experience refer={setExpRef} />
      <Education refer={setEduRef} />
      <Me refer={setAboutRef} />
      <Footer />
    </React.Fragment>
  )
}

export default App