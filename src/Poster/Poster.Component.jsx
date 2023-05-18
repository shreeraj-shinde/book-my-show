import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col px-1 md:px-3 gap-2">
        <div className="h-40 md:h-80">
          <img
            className="w-full h-full rounded-md"
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt=""
          />
        </div>
        <h3
          className={`text-lg text-gray-700 font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
