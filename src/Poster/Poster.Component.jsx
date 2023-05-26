import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col px-1 md:px-3 gap-2">
          <div className="h-40 md:h-80">
            <img
              className="w-full h-full rounded-md "
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
    </>
  );
};

const PlayPoster = (props) => {
  return (
    <a
      href="https://in.bookmyshow.com/events/abhangawari/ET00359489"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col px-1 md:px-3 gap-2">
        <div className="h-40 md:h-80">
          <img
            className="w-full h-full rounded-md object-cover object-center"
            src={props.src}
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
    </a>
  );
};

const Poster = (props) => {
  if (props.isPlay) {
    return <PlayPoster {...props} />;
  }
  return <MoviePoster {...props} />;
};

export default Poster;
