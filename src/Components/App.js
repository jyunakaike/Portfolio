import React from 'react';
import './style.css' ;

// components
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Education } from './Education';

const App = () => {
  return (
    <React.Fragment>
      <Header /> 
      <Introduction />
      <Education /> 



      <section>Esto es el section3</section>

      <footer> Esto es el footer</footer>
    </React.Fragment>
  )
}

export default App