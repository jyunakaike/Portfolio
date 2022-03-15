import React, { useEffect, useState } from 'react';
import './style.css';

// component 
import { Card } from './Cards';
import { SliderImage } from '../Slider';

// db 
import initialState from '../db/initialState'


export const Experience = () => {
  const [showEtiquete, setShowEtiquete] = useState([])


  const listCards = initialState.portfolio

  let etiquete = [];

  const filterEtiquete = (etiquete)=>{
    if(showEtiquete.length === 0 ){
      setShowEtiquete([etiquete]);
    }
    else {
      (showEtiquete.includes(etiquete))
      ?null
      :setShowEtiquete([...showEtiquete, etiquete])
    }
  }

  // useEffect(() => {
  //   console.log(showEtiquete)
  
  // }, [showEtiquete])
  


  return (
    <section className='Experience-container' id='Experience'>
      <div className='Experience-detail-container'>
        <div className='Experience-header'>
          <h2>What I can Do</h2>

          <div className='Experience-container-input' >
            <div className='Experience-input'>
              {/* <input  /> */}
              <div className='Experience-input-container'>
                {
                  (showEtiquete)
                  ? 
                   showEtiquete.map(etiquete =><div className='Experience-input-container-filter'>{etiquete}</div> )
                  : 
                    null
                }
              </div>
            </div>

            <div className='Experience-filters'>
              Filter:
              <span onClick={()=>filterEtiquete("react")}>React</span>
              <span onClick={()=>filterEtiquete("html")}>Html</span>
              <span onClick={()=>filterEtiquete("js")}>Js</span>
              <span onClick={()=>filterEtiquete("css")}>Css</span>
              <span onClick={()=>filterEtiquete("responsive")}>Responsive</span>
              <span onClick={()=>filterEtiquete("nextjs")}>Nextjs</span>
              <span onClick={()=>filterEtiquete("mobilefirst")}>mobileFirst</span>
            </div>

          </div>
        </div>

        <SliderImage  listCards={listCards} />
        {/* <div className='Experience-card-container' > */}
          {/* cards */}
          {/* <SliderImage  listCards={listCards} /> */}
          {/* {
            // listCards.map(listCar => <Card key={listCard.id} /> )
            listCards.map(listCard =><Card key={listCard.id}  {...listCard} />)
          } */}
        {/* </div> */}
      </div>
    </section>
  )
}
