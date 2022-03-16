import React from 'react'
import './styles.css'

export const Card = ({ image, title, languages, description, page, filterEtiquete }) => {
    const imagen = "faq-accordion.jpg"

    return (
        <div className='Experience-card' >
            <a href={page}>
                <img className='Card-image' src={require(`../../../assets/image/${image}`)} ></img>
            </a>
            <div className='Card-detail'>
                <div className='Card-detail-title'>
                    <h3>{title}</h3>
                </div>

                <div className='Card-detail-skills'>
                    {
                        languages.map(language => <span key={language}>{language}</span>)
                    }
                </div>

                <div className='Card-detail-description'>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}
