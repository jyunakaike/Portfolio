import React, { useEffect, useState } from 'react';
import './style.css';

import { ImCross } from "react-icons/im"


// component 
import { Card } from './Cards';
import { SliderImage } from '../Slider';

// db 
import initialState from '../db/initialState'


export const Experience = () => {
  const [showEtiquete, setShowEtiquete] = useState([])

  const listCards = initialState.portfolio

  const clearFilter = () => {
    setShowEtiquete([]);
  }

  const clearFilterItem = (i) => {
    const arr = showEtiquete.filter((item) => item !== i)
    setShowEtiquete(arr);
  }

  const filterEtiquete = (etiquete) => {
    (showEtiquete.includes(etiquete))
      ? clearFilterItem(etiquete)
      : setShowEtiquete([...showEtiquete, etiquete])
  }

  // const logdeletiquete = (item) =>{
  //   console.log(item)
  // }

  console.log(showEtiquete)

  return (
    <section className='Experience-bg' >
      <div className='Experience-container' id='Experience'>
        <div className='Experience-detail-container'>
          <div className='Experience-header'>
            <h2>What I can Do</h2>

            <div className='Experience-container-input' >
              <div className='Experience-input'>

                {/* <div className='Experience-input-container'>
                  <div className='Experience-input-container-1'>
                    {
                      (showEtiquete)
                        ?
                        showEtiquete.map(etiquete => <div key={etiquete} className='Experience-input-container-filter' >{etiquete} <ImCross onClick={()=>clearFilterItem(etiquete)}/></div>)
                        :
                        null
                    }
                  </div>
                  <div className='Experience-input-container-2'>
                    <ImCross onClick={clearFilter} />
                  </div>
                </div> */}
              </div>
              <div className='Experience-filters'>
                Filter:
                <div className={(showEtiquete.includes('react')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("react")}>React</div>
                <div className={(showEtiquete.includes('html')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("html")}>Html</div>
                <div className={(showEtiquete.includes('js')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("js")}>Js</div>
                <div className={(showEtiquete.includes('css')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("css")}>Css</div>
                <div className={(showEtiquete.includes('responsive')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("responsive")}>Responsive</div>
                <div className={(showEtiquete.includes('nextjs')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("nextjs")}>Nextjs</div>
                <div className={(showEtiquete.includes('mobilefirst')) ? 'Experience-filters-button-active' : 'Experience-filters-button'} onClick={() => filterEtiquete("mobilefirst")}>mobileFirst</div>
              </div>
            </div>

          </div>

          <SliderImage listCards={listCards} >
            {
              (showEtiquete.length !== 0)
                ?
                listCards.filter(item => {
                  const va1 = item.languages;
                  const va2 = showEtiquete

                  const intersection = va1.filter(e => {
                    return va2.indexOf(e) > -1
                  })
                  const returnBool = () => {
                    if (intersection.length === va2.length) {
                      return true
                    }
                    else {
                      return false
                    }
                  }
                  return returnBool();
                })
                  .map(listCard => <Card key={listCard.id}  {...listCard} showEtiquete={showEtiquete} setShowEtiquete={setShowEtiquete} />)
                :
                listCards.map(listCard => <Card key={listCard.id}  {...listCard} showEtiquete={showEtiquete} setShowEtiquete={setShowEtiquete} />)
            }
          </SliderImage>
        </div>
      </div>
    </section>
  )
}
