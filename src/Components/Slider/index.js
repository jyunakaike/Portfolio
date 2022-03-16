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
    return (
            <Slider {...settings}>
                {children}
            </Slider>
    )
}
