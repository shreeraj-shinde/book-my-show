import { useEffect, useState } from "react";
import React from "react";
//HOC
import DefaultLayout from "../Layout/Default.Layout";
//Components
import EntertainmentCard from "../Components/EntertainmentComponent/EntertainmentCard.Component";
import HeroCrousel from "../Components/HeroCrousel/HeroCrousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
//axios
import axios from "axios";

const Homepage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommenedMovies = await axios.get("movie/popular");
      setrecommendedMovies(getRecommenedMovies.data.results);
      console.log("Recommended Movies :", getRecommenedMovies.data.results);
    };
    requestRecommendedMovies();

    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("movie/top_rated");
      setpremierMovies(getTopRatedMovies.data.results);
      console.log("Top rated:", getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();

    const requestPlayingNowMovies = async () => {
      const getPlayingNowMovies = await axios.get("movie/now_playing");
      setonlineStreamEvents(getPlayingNowMovies.data.results);
    };
    requestPlayingNowMovies();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      const get_images = await axios.get("movie/top_rated");
      setImages(get_images.data.results);
      console.log(images);
    };
    getImages();
  }, []);
  return (
    <>
      <HeroCrousel images={images} />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title={"Recommended Movies"}
          subtitle={"list of Recommended Movies"}
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
            subtitle={"Brand new Releases every Friday"}
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title={"Online Streaming Event"}
          subtitle={""}
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(Homepage);
