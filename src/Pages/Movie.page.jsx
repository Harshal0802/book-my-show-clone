import React from "react";
import { SiPaytm } from "react-icons/si";

//Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import PosterImages from "../config/TempPoster.config";

const Movie = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/3 lg:px-28">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Doctor Strange in the Multiverse of Madness - a thrilling ride
            through the Multiverse with Doctor Strange, his trusted friend Wong
            and Wanda Maximoff, aka Scarlet Witch.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h3 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offer
          </h3>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 p-3 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <SiPaytm className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">
                  Paytm Stream Offer
                </h3>
                <p className="text-gray-600">
                  Limited Free Access to Select Titles
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-5 h-5">
                <img
                  src="https://in.bmscdn.com/offers/offerlogo/bms-stream-first-movie-free-datenight.jpg?19022021140646"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">Filmy Pass</h3>
                <p className="text-gray-600">
                  Limited Free Access to Select Titles
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h3 className="text-gray-800 font-bold text-2xl mb-3">Cast & Crew</h3>
          <div className="flex flex-wrap gap-4">
            <Cast
              img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
              castName="Benedict Cumberbatch"
              role="Dr.Stephen Strange"
            />
            <Cast
              img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/elizabeth-olsen-31135-24-03-2017-17-32-16.jpg"
              castName="Elizabeth Olsen"
              role="Wanda Maximoff"
            />
            <Cast
              img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rachel-mcadams-10133-13-02-2018-01-20-32.jpg"
              castName="Rachel McAdams"
              role="Dr. Christine Palmer"
            />
            <Cast
              img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-wong-300-05-04-2019-02-57-20.jpg"
              castName="Benedict Wong"
              role="Wong"
            />
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={PosterImages}
            title="You might also like"
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={PosterImages}
            title="BMX XCLUSIVE"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
