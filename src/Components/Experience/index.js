import React, { useEffect, useState } from 'react';
import './style.css';

import {ImCross} from "react-icons/im"


// component 
import { Card } from './Cards';
import { SliderImage } from '../Slider';

// db 
import initialState from '../db/initialState'


export const Experience = () => {
  const [showEtiquete, setShowEtiquete] = useState([])


  const listCards = initialState.portfolio

  let etiquete = [];

  const clearFilter = () => {
    setShowEtiquete([]);
  }

  const clearFilterItem = () => {
    const arr = showEtiquete.filter((item) => item !== i)
    setShowEtiquete(arr);
  }



  const filterEtiquete = (etiquete) => {
    console.log(etiquete)
    if (showEtiquete.length === 0) {
      setShowEtiquete([etiquete]);
    }
    else {
      (showEtiquete.includes(etiquete))
        ? null
        : setShowEtiquete([...showEtiquete, etiquete])
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
                <div className='Experience-input-container-1'>
                  {
                    (showEtiquete)
                      ?
                      showEtiquete.map(etiquete => <div className='Experience-input-container-filter'>{etiquete}</div>)
                      :
                      null
                  }
                </div>
                <div className='Experience-input-container-2'>
                  <ImCross onClick={clearFilter} />

                </div>


              </div>
            </div>

            <div className='Experience-filters'>
              Filter:
              <span onClick={() => filterEtiquete("react")}>React</span>
              <span onClick={() => filterEtiquete("html")}>Html</span>
              <span onClick={() => filterEtiquete("js")}>Js</span>
              <span onClick={() => filterEtiquete("css")}>Css</span>
              <span onClick={() => filterEtiquete("responsive")}>Responsive</span>
              <span onClick={() => filterEtiquete("nextjs")}>Nextjs</span>
              <span onClick={() => filterEtiquete("mobilefirst")}>mobileFirst</span>
            </div>

          </div>
        </div>

        <SliderImage listCards={listCards} >
          {
            (showEtiquete.length !== 0)
            ?
              listCards.filter(item =>{
                const va1 = item.languages;
                const va2 = showEtiquete

                const intersection = va1.filter(e => {
                  return va2.indexOf(e)> -1
                })
                const returnBool = () => {
                  if(intersection.length === va2.length)
                  {
                    return true
                  }
                  else {
                    return false
                  }
                }
                return returnBool();
              })
              .map(listCard => <Card key={listCard.id}  {...listCard} filterEtiquete={() => filterEtiquete()} />)
            :
              listCards.map(listCard => <Card key={listCard.id}  {...listCard} filterEtiquete={() => filterEtiquete()} />)
          }

          


        </SliderImage>
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
