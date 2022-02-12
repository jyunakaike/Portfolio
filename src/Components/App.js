import React from 'react';
import './style.css' ;

// components
import { Header } from './Header';

const App = () => {
  return (
    <React.Fragment>
      <Header /> 

      <section>Esto es el section1</section>

      <section>Esto es el section2 </section> 

      <section>Esto es el section3</section>

      <footer> Esto es el footer</footer>
    </React.Fragment>
  )
}

export default App