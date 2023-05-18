import React, { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/Movie.Context";

const MovieInfo = () => {
  const Movie = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const genres = Movie.genres?.map((name) => name).join(" | ");
  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };
  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };
  return (
    <>
      {/* <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/> */}
      <div className="flex flex-col gap-8 ">
        <h1 className="text-white">{Movie.original_title}</h1>
        <div className="text-black flex flex-col gap-2 md:px-4">
          <h1>$K Rating</h1>
          <h4>English | Hindi | Tamil | Telgu</h4>
          <h4>
            {Movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-red-500 w-full py-3 text-white font-semobold rounded-lg">
            Rent 129₹
          </button>
          <button className="bg-red-500 w-full py-3 text-white font-semobold rounded-lg">
            Buy 500₹
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
