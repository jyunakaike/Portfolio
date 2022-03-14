import React from 'react'
import './styles.css'

export const Card = ({Image , title, languages, description, page}) => {
    return (
        <div className='Experience-card' >
            <div className='Card-image'>Imagen</div>
            <div className='Card-detail'>
                <div className='Card-detail-title'>
                    <h3>{title}</h3>
                </div>

                <div className='Card-detail-skills'>
                    {languages.map(language => <span>{language}</span>)

                    }
                    {/* <span>React</span>
                    <span>Html</span>
                    <span>JS</span>
                    <span>css</span> */}
                </div>

                <div className='Card-detail-description'>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}
