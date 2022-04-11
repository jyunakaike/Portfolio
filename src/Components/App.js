import React from 'react';
import './style.css';

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Me } from './Me';

const App = () => {
  const useMoveSection = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <React.Fragment>
      <Header useMoveSection={useMoveSection} />
      <Introduction  useMoveSection={useMoveSection} />
      <Me />
      <Experience />
      <Footer />
    </React.Fragment>
  )
}

export default App