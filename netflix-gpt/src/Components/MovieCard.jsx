import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ movieData }) => {
  const { poster_path, title } = movieData;
  return (
    <>
      <div className="w-48 pr-4">
        <img alt="banner" src={IMG_CDN_URL + poster_path}></img>
        <h1> {title}</h1>
      </div>
    </>
  );
};

export default MovieCard;
