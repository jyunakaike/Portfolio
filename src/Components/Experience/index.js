import React, { useRef, useEffect } from 'react'
import './style.css'

export const Experience = ({ refer }) => {

  const myRef = useRef(null);

  useEffect(() => {
    refer(myRef)
  }, [])

  return (
    <section ref={myRef} className='Experience-container'>
      <div className='Experience-detail-container'>
        <div className='Experience-header'>
          <h2>What I can Do</h2>

          <div className='Experience-container-input' >
            <div className='Experience-input'>
              <input  />
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
          <div className='Experience-card' >
            <div className='Card-image'>Imagen</div>
            <div className='Card-detail'>
              <div className='Card-detail-title'>
                <h3>Proyecto para mostrar numero 1 identificador de algo para que sea interesante</h3>
              </div>

              <div className='Card-detail-skills'>
                <span>React</span>
                <span>Html</span>
                <span>JS</span>
                <span>css</span>
              </div>

              <div className='Card-detail-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus at arcu vestibulum mattis. Aliquam at faucibus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fringilla efficitur leo, eget porttitor nibh ultricies vitae. Nunc id sem vitae orci scelerisque rutrum. Fusce a dolor orci. Mauris malesuada vehicula magna, nec suscipit neque laoreet ut. In sit amet tincidunt felis, eu fringilla leo. Donec nec massa sem. Praesent tristique bibendum eros et vulputate. Suspendisse potenti. Praesent fringilla dictum ullamcorper. Donec tempor nisi id hendrerit imperdiet. Etiam elementum justo id sapien eleifend porttitor. Cras vel consectetur nisi. Pellentesque eu malesuada justo, ut laoreet orci.</p>
              </div>
            </div>

          </div>


          <div className='Experience-card' >
            <div className='Card-image'>Imagen</div>
            <div className='Card-detail'>
              <div className='Card-detail-title'>
                <h3>Proyecto para mostrar numero 3</h3>
              </div>

              <div className='Card-detail-skills'>
                <span>React</span>
                <span>Html</span>
                <span>JS</span>
                <span>css</span>
              </div>

              <div className='Card-detail-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              </div>
            </div>
          </div>
          <div className='Experience-card' >
          </div>
          <div className='Experience-card' >
          </div>
        </div>
      </div>
    </section>
  )
}
