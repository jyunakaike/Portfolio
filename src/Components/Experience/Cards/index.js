import React from 'react'
import './styles.css'

export const Card = ({ image, title, languages, description, page, showEtiquete , setShowEtiquete }) => {
    const imagen = "faq-accordion.jpg"

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


    return (
        <div className='Experience-card' >
            <a href={page} target="_blank">
                <img className='Card-image' src={require(`../../../assets/image/${image}`)} alt={"Card-image"} ></img>
            </a>
            <div className='Card-detail'>
                <div className='Card-detail-title'>
                    <h3>{title}</h3>
                </div>

                <div className='Card-detail-skills'>
                    {
                        languages.map(language => <div onClick={()=>{filterEtiquete(language)}} key={language}>{language}</div>)
                    }
                </div>

                {/* <div className='Card-detail-description'>
                    <p>{description}</p>
                </div> */}
            </div>

        </div>
    )
}
