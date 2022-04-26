import React from "react";
import Slider from "react-slick";

//Components
import Poster from "../Poster/Poster.component";


const Premier = () => {
    
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
        {
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }
    ],
    };

    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-srjclbbhpk-portrait.jpg",
            alt: "spider-man",
            title: "Spider-Man: No Way Home",
            subtitle: "English",
        },
    ];

    return (
        <>  
            <Slider {...settings}>
                {PremierImages.map((img) => (
                    <Poster {...img} />
                ))}
            </Slider>
        </>
    )
};

export default Premier;