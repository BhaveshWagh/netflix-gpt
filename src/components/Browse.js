import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryCotainer />
      {/**
            MainContainer
              - VideoBackground
              - VideoTitle
            SecondaryContainer
              - MovieList * n
              - Card * n
         */}
    </div>
  );
};

export default Browse;
