import React, { useState, useEffect} from 'react';
import './style.css';

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Education } from './Education';
import { Footer } from './Footer';

const App = () => {
  // get ref From components 
  const [infoRef, setInfoRef] = useState()
  const [expRef, setExpRef] = useState()
  const [eduRef, setEduRef] = useState()
  // this state can change section components
  const [ref, setRef] = useState()

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth'})

  useEffect(() => {
    console.log(ref)
    if(ref !== undefined){
      scrollToRef(ref)
    }
  }, [ref])

  return (
    <React.Fragment>
      <Header expRef={expRef} eduRef={eduRef} infoRef={infoRef}  setRef={setRef} />
      <Introduction refer={setInfoRef} />
      <Experience refer={setExpRef} />
      <Education refer={setEduRef} />
      <Footer />
    </React.Fragment>
  )
}

export default App