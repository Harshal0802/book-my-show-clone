import React, { useContext, useState, useEffect } from "react";
import { SiPaytm } from "react-icons/si";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

//Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//context
import { MovieContext } from "../context/movie.context";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommondedMovies, setRecommondedMovies] = useState([]);


  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  },[id]);

  useEffect(() => {
    const requestRecommondedMovies = async () => {
      const getRecommondedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommondedMovies(getRecommondedMovies.data.results);
    };
    requestRecommondedMovies();
  },[id]);

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

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-4/5 lg:px-28">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>{movie.overview}</p>
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
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                img={`https://image.tmdb.org/t/p/original/${castData.profile_path}`}
                castName={castData.original_name}
                role={castData.character}
                key={castData.id}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
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
            images={recommondedMovies}
            title="Recommonded"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
