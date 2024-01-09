import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../Utils/LanguageConstants";
import openai from "../Utils/openAI";
import { API_OPTIONS } from "../Utils/constants";
import { addSearchMovie } from "../Utils/MovieSlice";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviename +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // const gptQuery =
    //   "Act as a movie recomendation system and suggest some movies for the query " +
    //   searchText.current.value +
    //   ". only give me names of top 5 movies, comma seperated like the example result given ahead. Example: Gadar, KGF, Salaar, gol mal, ugram";

    // const GPTResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(GPTResults.choices);

    const searchResults = await searchMovieTMDB(searchText.current.value);
    dispatch(addSearchMovie(searchResults));
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-[70%] grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-10 border transition duration-300 focus:border-black focus:outline-none focus:ring focus:ring-gray-800"
          placeholder={lang[selectedLanguage].txtSearchPlaceHolder}
          ref={searchText}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white font-bold rounded-lg col-span-2 transition duration-300 hover:bg-black"
          onClick={handleGPTSearchClick}
        >
          {lang[selectedLanguage].txtSearch}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
