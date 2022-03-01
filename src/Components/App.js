import React, { useState, useEffect } from 'react';
import './style.css';

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Me } from './Me';

const App = () => {
  // this state can change section components
  const [ref, setRef] = useState()

  // scroll view Smoothly
  const scrollToRef = (ref) => { 
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const useMoveSection = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (ref !== undefined) {
      // scrollToRef(ref)
      useMoveSection(ref)
      console.log(ref)
    }
  }, [ref])

  return (
    <React.Fragment>
      <Header setRef={setRef} />
      <Introduction  />
      <Me  />
      <Experience  />
      <Footer />
    </React.Fragment>
  )
}

export default App