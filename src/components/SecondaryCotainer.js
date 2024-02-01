import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
/**
 * - MovieList - Popular
 *    - MovieCard * n
 * - MovieList - Now Playing
 * - MovieList - Trending
 * - MovieList - Horror
 */
const SecondaryCotainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-60 pl-14 relative z-20">
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"TopRated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryCotainer;
