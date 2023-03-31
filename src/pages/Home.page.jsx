import { useState } from "react";
import React from "react";
//HOC
import DefaultLayout from "../Layout/Default.Layout";
//Components
import EntertainmentCard from "../Components/EntertainmentComponent/EntertainmentCard.Component";
import HeroCrousel from "../Components/HeroCrousel/HeroCrousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";

const Homepage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCrousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title={"Recommended Movies"}
          subject={"list of Recommended Movies"}
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title={"Premier"}
            subject={"Brand new Releases every Friday"}
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div>
        <PosterSlider
          title={"Online Streaming Event"}
          subject={""}
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(Homepage);
