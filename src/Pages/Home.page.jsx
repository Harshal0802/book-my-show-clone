import React from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component"

//config
import PosterImages from "../config/TempPoster.config";

const HomePage = () => {
    return (
      <>
        <div className="flex flex-col gap-10">
          <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
          </div>    
          <div className="bg-bms-800 py-12">
            <div className="container mx-auto px-4 flex flex-col gap-3">
              <div className="hidden md:flex">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" className="w-full h-full"/>
              </div>
              <PosterSlider 
                images={PosterImages} 
                title="Premieres" 
                subtitle="Brand new releases every friday" 
                isDark
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="Online Streaming Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="Outdoor Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="Laughter Therapy" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="Popular Events" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="The Latest Plays" 
                isDark={false}
              />
        </div>
        <div className="container mx-auto px-4 my-8">
              <PosterSlider 
                images={PosterImages} 
                title="Top Games & Sports Events" 
                isDark={false}
              />
        </div>
      </>
    );
};

export default HomePage;