import React from 'react';
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = [
          "https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1650741565833-1c19f0890075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1650744256829-71b9d1c30586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1650751909771-1950e87e4f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1650835406487-e4134d4a9fed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        ];

    return ( 
        <div>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((img) => (
                            <div className="w-full h-60 md:h-80 py-3">
                                <img src={img} alt="images" className="w-full h-full" />
                            </div>
                        ))}
                </HeroSlider>    
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {images.map((img) => (
                            <div className="w-full h-96 px-2 py-3">
                                <img src={img} alt="images" className="w-full h-full rounded-md" />
                            </div>
                        ))}
                </HeroSlider>    
            </div>
        </div>
    ); 
};

export default HeroCarousel;