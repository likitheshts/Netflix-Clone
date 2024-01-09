import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;
  return (
    <div className="px-6">
      <h1 className="text-4xl font-bold py-6 text-white"> {title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
