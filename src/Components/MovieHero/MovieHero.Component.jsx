import React from "react";
import { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.Context";
import MovieInfo from "./MovieInfo.Component";
const MovieHero = () => {
  const { Movie } = useContext(MovieContext);
  console.log(Movie);
  const genres = Movie.genres?.map((name) => name).join(" | ");
  const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
  return (
    <>
      <div>
        {/* Mobile and Tab size */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
            alt="Cover Poster"
            className="m-4 rounded"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>$K Rating</h4>
              <h4>English | Hindi | Tamil | Telgu</h4>
              <h4>
                {Movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              className="bg-red-500 w-full py-3 text-white font-semobold rounded-lg"
              onClick={rentMovie}
            >
              Rent 129₹
            </button>
            <button
              className="bg-red-500 w-full py-3 text-white font-semobold rounded-lg"
              onClick={buyMovie}
            >
              Buy 500₹
            </button>
          </div>
        </div>
        {/* Large Screen Device */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg , rgb(34,34,34) 14.95% ,rgba(34,34,34) 30.3%,rgba(34,34,34,0.90) 38.3% ,rgba(34,34,34,0.60) 58.3% ,rgba(34,34,34,0.85) 97.47% , rgb(34,34,34)100%)",
            }}
          />

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <MovieInfo movie={Movie} />
            </div>
          </div>

          <img
            src={`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`}
            alt="backdrop"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
