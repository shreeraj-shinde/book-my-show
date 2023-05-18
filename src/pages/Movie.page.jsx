import React, { useEffect, useState, useContext } from "react";
import MovieLayout from "../Layout/Movie.Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.Context";
import Slider from "react-slick";
import { FaCcApplePay, FaCcVisa } from "react-icons/fa";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import MovieHero from "../Components/MovieHero/MovieHero.Component";
const Moviepage = () => {
  const { id } = useParams();

  const { Movie, setMovie } = useContext(MovieContext);
  const [Cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [Recommended, setRecommended] = useState([]);
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`movie/${id}/credits`);
      setCast(getCast.data.cast);
    };

    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/${id}/similar`);
      setSimilar(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `movie/${id}/recommendations`
      );
      setRecommended(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);
      setMovie(getMovie.data);
      console.log(Movie.data);
    };
    requestMovie();
  }, [id]);

  const CastSetting = {};
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About The Movie</h1>
          <p>{Movie.overview}</p>
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Bold
                </h3>
                <p className="text-gray-600">
                  Get 50% off upto INR 150 on all Rupay card on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off upto INR 150 on all Rupay card on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <PosterSlider
          config={settings}
          title={"Recommended Movies"}
          posters={Recommended}
          isDark={false}
        />
      </div>

      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <PosterSlider
          config={settings}
          title={"Exclusive"}
          posters={similar}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayout(Moviepage);
