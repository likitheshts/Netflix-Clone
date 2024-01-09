import React from "react";
import { useSelector } from "react-redux";
import GPTSuggestionCard from "./GPTSuggestionCard";

const GPTSuggestions = () => {
  const suggestions = useSelector((store) => store.movies.searchMovieList);
  if (suggestions === null) return;
  return (
    <div className="flex flex-wrap p-2">
      {suggestions.map((movie) => (
        <GPTSuggestionCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default GPTSuggestions;
