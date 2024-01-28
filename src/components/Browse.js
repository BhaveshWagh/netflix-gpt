import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";

const Browse = () => {
  useNowPlayingMovies();

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
