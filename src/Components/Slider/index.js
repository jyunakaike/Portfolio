import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// component 
import { Card } from '../Experience/Cards';

import './styles.css'

const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
        <button
            {...props}
            className={
                "slick-next slick-arrow"
                // "slick-next slick-arrow" +
                // (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        />
    )
}

const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
        <button
            {...props}
            className={
                "slick-prev slick-arrow"
                // "slick-prev slick-arrow" +
                // (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </button>
    )
}

export const SliderImage = ({ children }) => {
    let settings = {
        dot: true,
        centerMode: true,
        centerPadding: '60px',
        // centerPadding: '10px',
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         dots: true,
            //         slidesToShow: 2,
            //         // slidesToScroll:4,
            //         infinite: true,
            //         // centerMode: true,
            //         // centerPadding: '60px',
            //     }
            // },
            {
                breakpoint: 770,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    // infinite: true,
                    // centerMode: true,
                    // centerPadding: '20rem',
                    // centerPadding: '0%',
                }
            }
        ],
        NextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <Slider className='slider-container' {...settings}>
            {children}
        </Slider>
    )
}
