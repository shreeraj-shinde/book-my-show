import React from "react";
import MovieNavbar from "../Components/Navbar/MovieNavbar.Component";
const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
      </div>
    );
  };

export default MovieLayout;
