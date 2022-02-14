import React from 'react';
import './style.css' ;

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Education } from './Education';
import { Footer } from './Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header /> 
      <Introduction />
      <Experience />
      <Education /> 
      <Footer />

    </React.Fragment>
  )
}

export default App