import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const GPTSuggestionCard = ({ movie }) => {
  const { poster_path, original_title, overview, title, vote_average } = movie;
  console.log(original_title, title);
  if (vote_average === 0 || vote_average === null || vote_average === undefined)
    return;
  return (
    <>
      <div className="max-w-[28rem] max-h-[30rem] p-3 m-2 rounded-lg transition duration-300 bg-black bg-opacity-80 hover:border border-gray-500 overflow-auto">
        <h1 className="font-bold text-red-500 text-3xl m-2 pt-2 pb-2">
          {" "}
          {title + (title === original_title ? " " : " - " + original_title)}
        </h1>
        <hr></hr>
        <br></br>
        <div className="flex">
          <img
            alt="poster"
            src={IMG_CDN_URL + poster_path}
            className="h-[16rem]"
          ></img>
          <p className="pl-3 text-xl font-sans text-white leading-8">
            {overview}{" "}
            <p className="pt-4 font-bold text-3xl ">Rating - {vote_average}</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default GPTSuggestionCard;
