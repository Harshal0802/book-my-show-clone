import axios from "axios";
import React, {useState, useEffect} from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component"

// // config
// import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  
  //popularMovies
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  },[]);

  //topRatedMovies
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  // upcomingMovies
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

    return (
      <>
        <div className="flex flex-col gap-10">
          <div className="container mx-auto px-4 lg:px-28">
              <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
          </div>    
          <div className="bg-bms-800 py-12">
            <div className="container mx-auto px-4 lg:px-28 flex flex-col gap-3">
              <div className="hidden md:flex">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" className="w-full h-full"/>
              </div>
              <PosterSlider 
                images={popularMovies} 
                title="Premieres" 
                subtitle="Brand new releases every friday" 
                isDark
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-28 my-10">
              <PosterSlider 
                images={topRatedMovies} 
                title="Online Streaming Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 lg:px-28 my-8">
              <PosterSlider 
                images={upcomingMovies} 
                title="Outdoor Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 lg:px-28 my-8">
              <PosterSlider 
                images={popularMovies} 
                title="Laughter Therapy" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 lg:px-28 my-8">
              <PosterSlider 
                images={topRatedMovies} 
                title="Popular Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 lg:px-28 my-8">
              <PosterSlider 
                images={upcomingMovies} 
                title="The Latest Plays" 
                isDark={false}
              />
        </div>
      </>
    );
};

export default HomePage;