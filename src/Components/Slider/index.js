import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// component 
import { Card } from '../Experience/Cards';

export const SliderImage = ({ children }) => {
    let settings = {
        dot: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    // console.log(listCards)

    return (
        // listCards.map(listCar => <Card key={listCard.id} /> )

        // <div className='Experience-card-container' >
            <Slider {...settings}>
                {children}
            </Slider>
        // </div>
    )
}
