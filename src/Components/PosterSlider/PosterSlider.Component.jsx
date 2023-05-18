import React from "react";
import Slider from "react-slick";
import Poster from "../../Poster/Poster.Component";
const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config } = props;
  const settings = {
    arrows: true,
    slidesToShow: 5,
    speed: 500,
    slideToScroll: 4,
    isFinite: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-bold ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((poster) => (
          <Poster {...poster} isDark={isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
