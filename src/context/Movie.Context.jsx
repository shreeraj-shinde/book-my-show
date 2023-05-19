import React from "react";
import { createContext, useState } from "react";

export const MovieContext = createContext({});

const MovieProvider = ({ children }) => {
  const [Movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };
  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };
  return (
    <MovieContext.Provider
      value={{
        Movie,
        setMovie,
        isOpen,
        setIsOpen,
        price,
        setPrice,
        rentMovie,
        buyMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
