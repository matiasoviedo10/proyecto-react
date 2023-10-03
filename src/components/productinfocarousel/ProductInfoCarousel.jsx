import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';

const ProductInfoCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (slide) => setCurrentSlide(slide),
    }

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Slider>
            <p>Current slide: {currentSlide + 1}</p>
        </div>
    )
}

export default ProductInfoCarousel
