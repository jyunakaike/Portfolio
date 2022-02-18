import React from 'react'
import './styles.css'

export const Card = () => {
    return (
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
    )
}
