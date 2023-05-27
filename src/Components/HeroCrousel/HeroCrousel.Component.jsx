import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow.Component";

const HeroCrousel = (props) => {
  const settingsLG = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",

    arrows: true,
    slidesToShow: 1,
    speed: 2000,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    infinite: true,
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
        <Slider {...settings}>
          {props.images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider {...settingsLG}>
          {props.images.map((image) => (
            <div className="w-8/12 h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md items-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCrousel;
