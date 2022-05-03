import React from "react";

//component
import MovieInfo from "./MovieInfo.component";

const MovieHero = () => {
  return (
    <>
      <div>
        {/* mobile */}
        <div
          className="relative md:hidden w-full"
          style={{ height: "calc(180vw)" }}
        >
          <div className="absolute z-20 bottom-4 left-4">
            <MovieInfo />
          </div>
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>

        {/* medium */}
        <div
          className="relative hidden md:block w-full lg:hidden"
          style={{ height: "calc(85vw)" }}
        >
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4">
            <MovieInfo />
          </div>
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
        
        {/* large  */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "32rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
          <div className="absolute z-30 left-24 top-16 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg"
                alt="poster"
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
