import React, { useEffect, useState } from 'react'
import './style.css'

// component 
import { Card } from './Cards';

// db 
import initialState from '../db/initialState'


export const Experience = () => {

  const listCards = initialState.portfolio

  return (
    <section className='Experience-container' id='Experience'>
      <div className='Experience-detail-container'>
        <div className='Experience-header'>
          <h2>What I can Do</h2>

          <div className='Experience-container-input' >
            <div className='Experience-input'>
              <input />
            </div>

            <div className='Experience-filters'>
              Filter:
              <span>React</span>
              <span>Html</span>
              <span>Js</span>
              <span>css</span>
            </div>

          </div>
        </div>

        <div className='Experience-card-container' >
          {/* cards */}
          {
            // listCards.map(listCar => <Card key={listCard.id} /> )
            listCards.map(listCard =><Card key={listCard.id}  {...listCard} />)
          }

        </div>
      </div>
    </section>
  )
}
