import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow.Component";

const HeroCrousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
      genre_ids: [27, 53],
      id: 980078,
      original_language: "en",
      original_title: "Winnie the Pooh: Blood and Honey",
      overview:
        "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
      popularity: 3089.188,
      poster_path: "/fNTtVbqI92abEKAgz2ynurCUne.jpg",
      release_date: "2023-01-27",
      title: "Winnie the Pooh: Blood and Honey",
      video: false,
      vote_average: 5.9,
      vote_count: 258,
    },
    {
      adult: false,
      backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      popularity: 2776.325,
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      release_date: "2023-03-22",
      title: "John Wick: Chapter 4",
      video: false,
      vote_average: 8.2,
      vote_count: 520,
    },
    ,
  ]);
  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden ">
        <Slider>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/orignal${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-coverS"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/orignal${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCrousel;
