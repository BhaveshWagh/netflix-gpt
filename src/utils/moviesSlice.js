import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    upComingMovies: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovies,
  addPopularMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
