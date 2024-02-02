import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryCotainer />
        </>
      )}

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
